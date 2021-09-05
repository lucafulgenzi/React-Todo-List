import React, {FC, useState} from "react";

interface addTodoProps {
  addTodo: ( e: React.MouseEvent<HTMLButtonElement>, todo: string) => void;
}

export const AddTodo: FC<addTodoProps> = ({addTodo}) => {

  const [newTodo, setNewTodo] = useState<string>('');

  return (
      <form className='form-group'>
        <input onChange={(data) => setNewTodo(data.target.value)} type="text" className="form-field m-2" placeholder='Insert new todo'/>
        <button onClick={(e) => addTodo(e, newTodo)} className="btn btn-primary">ADD</button>
      </form>
  );
}
