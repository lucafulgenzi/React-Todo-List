import React, {FC} from "react";
import {Todo} from "../../models/Todo";
import './TodoList.css'

interface TodoProps {
  todos: Todo[]
  removeTodo: ( e: React.MouseEvent<HTMLElement>, id: number) => void;
  checkTodo: ( e: React.MouseEvent<HTMLElement>, id: number) => void;
}

export const TodoList: FC<TodoProps> = ({todos, removeTodo, checkTodo}) => {
  return (
      <ul className='list-group list-group-flush'>
        {
          todos && todos.map((todo: Todo) => (
              <li key={todo.id} className='list-group-item d-flex justify-content-between align-items-start'>
                <div>
                  <i className="fas fa-times fs-3 times-icon icon me-3"
                     onClick={ (e) => removeTodo(e, todo.id) }
                  />
                  <i className="fas fa-check fs-3 check-icon icon"
                     onClick={ (e) => checkTodo(e, todo.id) }/>
                </div>

                <span className={'lead ' + ( todo.checked ? 'checked' : '' )}>{todo.name}</span>
                <span className='lead'>{todo.date.toLocaleDateString()}</span>
              </li>
            ))
        }
      </ul>
  );
}
