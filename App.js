import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';



const App = () => {

    const [todos, setTodos] = useState([
        {id: 1, content: 'dog the walk'},
        {id: 2, content: 'water the sponge'},
        {id: 3, content: 'let a candle light me on fire'}
    ])

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
  
	return <>
		<h1>To Do's</h1>
        <div className="todos collection">
            {todos.length ? (
                todos.map(todo => {
                    return (
                        <li className="collection-item" key={todo.id}>
                        <div className="show" key={todo.id}>
                            <span onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
                        </div>
                       </li>
                    )
                })
            ): null}
        </div>
	</>
}

export default App;
