import React, {useEffect, useState} from 'react';
import './App.css';
import {Todo} from "./models/Todo";
import {TodoList} from "./features/TodoList";
import {AddTodo} from "./features/AddTodo";


const initTodo: Todo[] = [
  {
    id: 1,
    name: 'Comprare il latte',
    date: new Date(1631040195)
  },
  {
    id: 2,
    name: 'Andare a lavoro',
    date: new Date(1633632195)
  },
  {
    id: 3,
    name: 'Matrimonio Giorgio',
    date: new Date(1637520195)
  }
];

export const App = () => {

  // TODOS STATE
  const [todos, setTodos] = useState<Todo[]>([]);

  // COMPONENT USE EFFECT
  // ON CHANGE
  // ON DESTROY
  // DEPS = LISTEN CHANGE
  // IF DEPS IS [] RUN ONLY FIRST TIME (ON INIT)
  useEffect(() => {
    setTodos(initTodo);
    return () => {};
  }, []);


  const addTodo = (e: React.MouseEvent, todo: string ) => {
    // Prevent page reload
    e.preventDefault();

    const newTodo: Todo = {
      id: 4,
      name: todo,
      date: new Date(1633632196)
    };

    setTodos([...todos, newTodo]);
  }

  return (
    <div className='App container-fluid'>
      <h1 className='font-monospace p-2 mb-4'>TODO LIST</h1>
      <div className='row d-flex justify-content-center'>
        <div className="col-6">
          <AddTodo addTodo={addTodo}/>
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}
