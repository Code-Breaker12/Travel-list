import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  const numItems = items.length;

  return (
    <div className='App'>
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats numItems={numItems} items={items} />
    </div>
  );
}
