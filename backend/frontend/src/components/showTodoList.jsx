import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UpdateTodo } from "./updateTodo";

function TodoCard ({data , handleDelete, handleEdit}) {
    const { _id, title, description} = data;
    console.log(title,description);
    return (
        <li key = {_id}>
            <div className = "title-description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className = "button-container">
                <button name = {_id} className="button" onClick={handleEdit.bind( null, _id, title, description)}>edit</button>
                <button name = {_id} className="button" onClick={handleDelete}>delete</button>
            </div>
        </li>
    );
}

export function ShowTodoList() {
    const [todo, setTodo] = useState([]);
    const [open, setOpen] = useState(false); 
    const [id, setId] = useState(""); 
    const [update, setUpdate] = useState(false); 
    const [updateTitle, setUpdateTitle] = useState("");
    const [updateDescription, setUpdateDescription] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/ToDo")
            .then((res) => {
                console.log(res.data);
                setTodo(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [update]);

    function handleEdit( _id, title, description) { 
        setId(_id); 
        console.log("nid", title, description);
        setUpdateTitle(title);
        setUpdateDescription(description);
        setOpen(true);
    }

    function handleUpdate() { 
        console.log("update:", update, !update);
        setUpdate(!update);
    }

    function handleDelete(e) {
        axios.delete(`http://localhost:8000/api/ToDo/${e.target.name}`);

        setTodo((data) => {
            return data.filter((todo) => todo._id !== e.target.name);
        });
    }

    function handleClose() { 
        setId("");
        setOpen(false);
    }

    return (
        <section className="container">
            <Link to="/create-todo" className="button-new"> 
                <button className="button">New</button>
            </Link>
            <section className="contents">
                <h1>ToDo</h1>
                <ul className="list-container">
                    {todo.map((data) => (
                        <TodoCard data = {data} handleDelete= {handleDelete} handleEdit={handleEdit}/>
                    ))}
                </ul>
            </section>
            {open ? (
                <section className="update-container">
                    <div className="update-contents">
                        <p onClick={handleClose} className="close">
                            &times;
                        </p>
                        <UpdateTodo _id={id} title={updateTitle} description={updateDescription} handleClose={handleClose} handleUpdate={handleUpdate}/>
                    </div>
                </section>
            ) : (
                ""
            )}
        </section>
    );
}