import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems]=useState([]);

  return (
    <div className='App'>
      <Logo />
      <Form items={items} setItems={setItems}/>
      <PackingList items={items} setItems={setItems}/>
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <>
      <h1>🌴Far Away👜</h1>
    </>
  );
}
function Form({setItems}) {
  const [description, setDescription]= useState('');
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (e) => {
   e.preventDefault();
   if (!description) return ;
   const newItem = {description, quantity, packed: false, id:Date.now()}
   console.log(newItem)
   setItems(initialItems =>[...initialItems, newItem]);
   setDescription('');
   setQuantity(1);
  }
  return (
    <>
      <form className='add-form' onSubmit={handleSubmit}>
        <h3>What do you need for you trip?</h3>
        <select value={quantity} onChange={(e)=>{setQuantity(Number(e.target.value))}} >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input type='text' value={description} placeholder='Item...' onChange={(e)=>setDescription(e.target.value)}></input>
        <button>Add</button>
      </form>
    </>
  );
}
function PackingList({items, setItems}) {
  return (
    <>
      <div className='list'>
        <ul>
          {items.map((item) => {
            return <Item item={item} key={item.id} setItems={setItems} items={items} />;
          })}
        </ul>
      </div>
    </>
  );
}
function Item({ item, setItems,items }) {
  const onClickCancel = (id) =>{
   setItems(items.filter((item)=>item.id!==id ))
  }
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.description}
      </span>
      <button onClick={()=>onClickCancel(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className='stats'>
      <em>You have X items on your list , and you already packed X </em>
    </footer>
  );
}
