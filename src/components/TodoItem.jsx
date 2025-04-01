// src/components/TodoItem.js
const TodoItem = ({ todo, setCurrentTodo, deleteTodo, toggleComplete }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <div className="todo-text">
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      </div>

      <div className="todo-actions">
        <button onClick={() => setCurrentTodo(todo)}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
