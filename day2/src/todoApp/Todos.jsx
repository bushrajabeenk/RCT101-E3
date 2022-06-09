import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/actions";

const Todos = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const addNew = () => {
    let newTodo = ref.current.value;
    console.log(newTodo);
    dispatch(
      addTodo({
        value: newTodo,
        status: false,
      })
    );
    ref.current.value = null;
  };

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input type="text" ref={ref} />
        <button onClick={addNew}>Add Todo</button>
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.value}</div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
