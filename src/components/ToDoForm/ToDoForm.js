import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  notificationActions,
  notificationSelector,
} from "../../redux/reducers/notificationReducer";
// import { addTodo } from "../../redux/actions/todoActions";
import { todoActions } from "../../redux/reducers/todoReducer";

import "./ToDoForm.css";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const disptach = useDispatch();
  const message = useSelector(notificationSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    disptach(todoActions.add(todoText));
    setTimeout(() => {
      disptach(notificationActions.reset());
    }, 2000);
  };

  return (
    <div className="container">
      {message && (
        <div class="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          required
        />
        <button className="btn btn-success float-end" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
