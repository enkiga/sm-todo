import TodoItem from './TodoItem';

const TodoList = ({ todos, setCurrentTodo, deleteTodo, toggleComplete }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setCurrentTodo={setCurrentTodo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;