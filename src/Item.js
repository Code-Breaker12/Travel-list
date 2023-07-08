export default function Item({ item, setItems, items }) {
    const onClickCancel = (id) => {
      setItems(items.filter((item) => item.id !== id));
    };
    const onClickToggleItem = (id) => {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        )
      );
    };
    return (
      <li>
        <input
          type='checkbox'
          value={item.packed}
          onChange={() => onClickToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {" "}
          {item.description}
        </span>
        <button onClick={() => onClickCancel(item.id)}>❌</button>
      </li>
    );
  }