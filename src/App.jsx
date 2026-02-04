import "./App.css";

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
  return (
    <div className="add-form">
      <h3>What do you need to pack?</h3>
    </div>
  );
}
// ___________________________________________________________________________________________________;

function PackingList() {
  return <div className="list">LIST</div>;
}
// ___________________________________________________________________________________________________;

function Stats() {
  return (
    <footer>You have X items in list, and you already packed X (Y%)</footer>
  );
}

