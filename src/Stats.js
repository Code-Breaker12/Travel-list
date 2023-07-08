export default function Stats({ numItems, items }) {
    if (!items.length) {
      return (
        <footer className="stats">
          <em>Start Adding some items in your list📝</em>
        </footer>
      );
    }
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numItems / numPacked) * 100);
    return (
      <footer className='stats'>
        <em>
          {percentage === 100
            ? "You got everything you need to go🧳"
            : `You have ${numItems} items on your list , and you already packed ${numPacked} (${percentage}%) `}{" "}
        </em>
      </footer>
    );
  }