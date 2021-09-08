import React, {FC, useState} from "react";


interface addTodoProps {
  addTodo: ( e: React.MouseEvent<HTMLButtonElement>, todo: string, data: Date | null) => void;
}

export const AddTodo: FC<addTodoProps> = ({addTodo}) => {

  const [todoText, setTodoText] = useState<string>('');
  const [todoData, setTodoData] = useState<Date | null>( null);

  return (
      <form className='form-group'>
        <input
          onChange={(data) => setTodoText(data.target.value)}
          type="text"
          className="form-control m-3 row col-12"
          placeholder='Insert new todo'/>
        <input
          onChange={(data) => setTodoData(data.target.valueAsDate)}
          type="date"
          className="form-control m-3 row col-12"
          placeholder='Insert new todo'/>
        <button
          onClick={(e) => addTodo(e, todoText, todoData)}
          className="btn btn-primary">
          ADD
        </button>
      </form>
  );
}
