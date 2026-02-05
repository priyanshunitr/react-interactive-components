import "./App.css";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return (
    <>
      <div className="app">
        <Logo />
        <Form />
        <PackingList />
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

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      description,
      quantity,
      packed: false,
      id: initialItems.length + 1,
    };
    console.log(newItem);
    initialItems.push(newItem);

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

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item data={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
// ___________________________________________________________________________________________________;

function Item({ data }) {
  return (
    <li>
      <span className={data.packed ? "packed" : ""}>
        {data.quantity} {data.description}
      </span>
      <button>❌</button>
    </li>
  );
}
// ___________________________________________________________________________________________________;

function Stats() {
  return (
    <footer>You have X items in list, and you already packed X (Y%)</footer>
  );
}
