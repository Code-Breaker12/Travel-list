import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, setItems }) {
    const [sortBy, setSortBy] = useState("input")
    let sortedItems; 
    if(sortBy==='input'){sortedItems=items;}
    if(sortBy==='description'){sortedItems=items.slice().sort((a,b)=> a.description.localeCompare(b.description))}
    if(sortBy==='packed'){sortedItems= items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))
    }
     const onClickClearList =()=>{
      const confirmed= window.confirm('Are you sure you want to clear this?');
      if (confirmed){setItems([])};
    }
    return (
      <>
        <div className='list'>
          <ul>
            {sortedItems.map((item) => {
              return (
                <Item
                  item={item}
                  key={item.id}
                  setItems={setItems}
                  items={items}
                />
              );
            })}
          </ul>
          <div className="actions">
            <select value={sortBy} onChange={e=> setSortBy(e.target.value)}>
              <option value="input">Sort by input order</option>
              <option value="description">Sort By Description</option>
              <option value="packed">Sort by packed status</option>
            </select>
           <button onClick={onClickClearList}>Clear List</button>
          </div>
        </div>
      </>
    );
  }