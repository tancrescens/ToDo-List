function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "learn react",
      isCompleted: false,
    },
    {
      text: "meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "build todo app",
      isCompleted: false,
    },
  ]);

  // value state
  const [value, setValue] = React.useState("");
  // form submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, { text: value, isCompleted: false }];
    setTodos(newTodos);
    setValue("");
  };

  const removeTodo = (e) => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  // returned to Component App
  return (
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i} id={i} onClick={removeTodo}>
          {todo.text}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Add Todo ..."
          onChange={(e) => setValue(e.target.value)}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
