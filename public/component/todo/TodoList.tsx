import React from "react";
import TodoListHeader from "./TodoListHeader";
import TodoListList from "./TodoListList";

type Props = {};

const TodoList = (props: Props) => {
  return (
    <div>
      <div>To Do List</div>
      <TodoListHeader />
      <TodoListList />
    </div>
  );
};

export default TodoList;
