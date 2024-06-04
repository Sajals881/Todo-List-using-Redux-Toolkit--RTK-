import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <h1>Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
