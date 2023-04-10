import React, { useEffect, useState } from "react";
import { Link,useParams,useNavigate } from "react-router-dom";
import "../App.css";

const Showtask = () => {
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState(false);

    const { id } = useParams()
    const navigate = useNavigate()
    const API_URL = "https://todolist-mh8o.onrender.com/api/tasks";

    useEffect(() => {
       const getData = async () => {
        const data = await fetchTask()

        setTask(data.data.task);
        setReminder(data.data.reminder);
        setDate(data.data.date);
       }
       getData()
    }, []);

    const fetchTask = async () => {
        const data = await fetch(`${API_URL}/${id}`)
        return await data.json()
    }

    const updateTask = async (e) => {
        e.preventDefault();
        const data = { task, date, reminder }

        try {
            const res = await fetch(`${API_URL}/${id}`,{
                method: "PATCH",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(data)
            });
            navigate('/')
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="container">
            <div className='header-cont'>
            <Link to='/'>
                <i className="fa-solid fa-arrow-left"  style={{ color: "blue" }}
                ></i>
            </Link>
            <h3>Update Task</h3>
            </div>
            <form className="form" onSubmit={updateTask}>
            <h6>ID: {id}</h6>
            <div className="mb-3">
            <label htmlFor="Task" className="form-label">Task</label>
            <input type="text" className="form-control"  placeholder="Add Task"
            onChange={(e) =>{
                setTask(e.target.value)
            }}
            value={task}
            />
            </div>

            <div className="mb-3">
            <label htmlFor="Day/Time" className="form-label">Day/Time</label>
            <input type="text" className="form-control"  placeholder="Add Day/Time" 
            onChange={(e) =>{
                setDate(e.target.value)
            }}
            value={date}
            />
            </div>

            <div className="mb-3 d-flex justify-content-between">
            <h6>Set Reminder</h6>
            <input type="checkbox" className="me-5"
            onChange={(e) =>{
                setReminder(e.target.checked)
            }}
            checked={reminder}
            />
            </div>

            <div className="mb-3">
            <input type="submit" className="form-control bg-black text-white text-center" value="Save Task" />
            </div>

            </form>
        </div>
    )
}

export default Showtask