import React from "react";

type Props = {};

const TodoListHeader = (props: Props) => {
  return (
    <div>
      <div>To Do List</div>
      <input type="text" name="todolistInput" />
      <button>+</button>
    </div>
  );
};

export default TodoListHeader;
