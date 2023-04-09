import React,{useEffect, useState} from "react";
import Addtask from '../components/Addtask';
import Header from '../components/Header';
import Task from '../components/Task';

const Home = () => {
    const [showTask,setShowTask] = useState(false);
    const [task,setTask] = useState([])
    const [page, setPage] = useState(1);

    const API_URL = "http://localhost:5000/api/tasks";

  
    useEffect(() =>{
      async function getData(){
        let res = await fetchData();
        setTask(res.data)
      }
  
      getData();
    },[page])
  
    // fetch data from server 
    async function fetchData(){
      let resp = await fetch(`${API_URL}?page=${page}`);
      return await resp.json();
    }

  
    async function fetchOneData(id){
      let res = await fetch(`${API_URL}/${id}`);
      return await res.json()
    }
  
    async function setReminder(id){
      // first method 
      // setTask(
      //   task.map(item =>{
      //     if(item.id === id){
      //       item.reminder = !item.reminder
      //     }
      //     return item
      //   })
      // );
  
      // find task has same id 
      const newData = task.find( item => {
        return item._id === id
      })
  
      let res = await fetch(`${API_URL}/${id}`,{
        method: "PATCH",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({
          reminder: !newData.reminder
        })
      })
  
      const updateTask = await res.json()
  
      setTask(
        task.map(item => {
          return item._id === id ? { ...updateTask.data } : item
        })
      )
  
    }
  
    async function deleteTask(id){
      await fetch(`${API_URL}/${id}`, {
        method:"DELETE",
      })
  
      setTask(
        task.filter( item => {
          return item._id !== id
        })
      )
    }
  
    function changeShowTask(){
      setShowTask(!showTask)
    }
  
    async function addTask(tasks){
      // let newTask = { key:Math.floor(Math.random() * 10000), ...tasks}
      // setTask([...task, newTask])
      let newTask = await fetch(API_URL,
        {
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(tasks)
        }
      )
      let data = await newTask.json()
      setTask([data.data, ...task]);
    }

    return (
        <div className='container'>
        <Header changeShowTask={changeShowTask} showTask={showTask}/>
        {showTask && <Addtask addTask={addTask}/> }
        {task.length > 0 ? <Task task={task} setReminder={setReminder} deleteTask={deleteTask}/> : "No Task Here"}
       </div>
    )
}

export default Home;