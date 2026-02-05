import "./App.css";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  return (
    <>
      <div className="app">
        <Logo />
        <Form items={items} setItems={setItems} />
        <PackingList items={items} setItems={setItems} />
        <Stats />
      </div>
    </>
  );
}

export default App;
// ___________________________________________________________________________________________________;

function Logo() {
  return <h1>FAR AWAY</h1>;
}
// ___________________________________________________________________________________________________;

function Form({ items, setItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      description,
      quantity,
      packed: false,
      id: items.length + 1,
    };
    console.log(newItem);
    setItems([...items, newItem]);


    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
// ___________________________________________________________________________________________________;

function PackingList({ items, setItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item data={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
// ___________________________________________________________________________________________________;

function Item({ data }) {
  const [className, setClassName] = useState(data.packed);
  return (
    <li>
      <span className={className ? "packed" : ""}>
        {data.quantity} {data.description}
      </span>
      <button onClick={() => {setClassName(!className)}}>❌</button>
    </li>
  );
}
// ___________________________________________________________________________________________________;

function Stats() {
  return (
    <footer>You have X items in list, and you already packed X (Y%)</footer>
  );
}
