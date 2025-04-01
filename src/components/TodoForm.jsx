import { useState, useEffect } from "react";

const TodoForm = ({ addTodo, updateTodo, currentTodo }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (currentTodo) {
      setFormData(currentTodo);
    }
  }, [currentTodo]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (currentTodo) {
      updateTodo({ ...currentTodo, ...formData });
    } else {
      addTodo(formData);
    }
    setFormData({ title: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Task title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>

      <div className="form-group">
        <textarea
          placeholder="Task description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        {errors.description && (
          <span className="error">{errors.description}</span>
        )}
      </div>

      <button type="submit" className="submit-btn">
        {currentTodo ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TodoForm;
