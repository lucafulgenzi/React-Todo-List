import React, {FC} from "react";
import {Todo} from "../models/Todo";

interface TodoProps {
  todos: Todo[]
}

export const TodoList: FC<TodoProps> = ({todos}) => {
  return (
    <>
      <ul className='list-group list-group-flush'>
        {
          todos && todos.map( (todo: Todo, index: number) => <li key={index} className='list-group-item'>{todo.name}</li> )
        }
      </ul>
    </>
  );
}
