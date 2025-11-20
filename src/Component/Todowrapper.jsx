import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function Todowrapper() {

    const[todos, setTodos] = useState([
        {content: 'clean toilet', id: Math.random(), isCompleted: false, isEditing: false},
        {content: 'do homeworks', id: Math.random(), isCompleted: false, isEditing: false},
    ]);
    const addTodo = (eachContent) => {
        setTodos([...todos, {content : eachContent, id: Math.random(), isCompleted: false, isEditing: false}])
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id
        }))
    }
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo => {
            return todo.id === id 
            ? {...todo, isCompleted: !todo.isCompleted}
            : todo
        })))
    }
    const toggleIsEditing = (id) => {
        setTodos(todos.map((todo => {
            return todo.id === id 
            ? {...todo, isEditing: !todo.isEditing}
            : todo
        })))
    }
    const editTodo = (id, newContent) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
            ? {...todo, content: newContent, isEditing: false}
            : todo
        }))
    }

    return (
        <div className="wrapper">
        <h1>待辦事項</h1>
        <CreateForm propsAddTodo={addTodo}/>
        {todos.map((eachTodo) => {
            return <Todo 
            toggleCompleted = {toggleCompleted}
            toggleIsEditing = {toggleIsEditing} 
            editTodo={editTodo}
            propsTodo={eachTodo} 
            key={eachTodo.id} 
            deleteTodo={deleteTodo}/>
        })}
        </div>
    );
}

export default Todowrapper;
