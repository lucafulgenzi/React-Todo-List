import React, {useEffect, useState} from 'react';
import './App.css';
import {Todo} from "./models/Todo";
import {TodoList} from "./features/list/TodoList";
import {AddTodo} from "./features/form/AddTodo";
import {Navbar} from "./features/components/Navbar";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {

  // TODOS STATE
  const [todos, setTodos] = useState<Todo[]>([]);

  // COMPONENT USE EFFECT
  // ON CHANGE
  // ON DESTROY
  // DEPS = LISTEN CHANGE
  // IF DEPS IS [] RUN ONLY FIRST TIME (ON INIT)
  useEffect(() => {
    return () => {};
  }, []);


  const addTodo = (e: React.MouseEvent, todo: string, data: Date | null ) => {
    // Prevent page reload
    e.preventDefault();

    if ( todo && data ) {
      let id = 1;
      if (todos?.length > 0 ){ id = todos[ todos?.length - 1].id + 1 }

      const newTodo: Todo = {
        id: id,
        name: todo,
        date: data,
        checked: false
      };

      setTodos([...todos, newTodo]);
    }else {
      alert('Insert a TODO');
    }
  }

  const removeTodo = (e: React.MouseEvent, id: number) => {
    setTodos( todos.filter( todo => todo.id !== id))
  }

  const checkTodo = (e: React.MouseEvent, id: number) => {

    setTodos( todos.map( todo => {
      if ( todo.id === id ){ todo.checked = !todo.checked }
      return todo;
    }))
  }

  return (
    <>
      <Router>
        <Navbar />
        <div className='App container-fluid'>
          <div className='row d-flex justify-content-center'>
            <div className="col-6">
              <Switch>
                <Route exact path='/'>
                  <TodoList todos={todos} removeTodo={removeTodo} checkTodo={checkTodo}/>
                </Route>
                <Route exact path='/add'>
                  <AddTodo addTodo={addTodo}/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>

  );
}
