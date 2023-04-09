import "../App.css"
import { Link } from "react-router-dom"

const Task = ({task,setReminder,deleteTask}) => {
  return (
    task.map((item, index) =>{
      return <div key={index} className={`task-cont ${item?.reminder ? "reminder" : ""}`} 
      onDoubleClick={() =>{
        setReminder(item?._id)
      }} 
      >
      <div>
        <h5 style={{ textTransform:"capitalize" }}>{item?.task}</h5>
        <h6 style={{ textTransform:"capitalize" }}>{item?.date}</h6>
      </div>

      <div style={{ width:"40px" , display: "flex", justifyContent:"space-between"}}>
      <Link to={`/showtask/${item?._id}`}>
        <i className="fa-solid fa-check" 
        
        style={{ color:"blue", cursor:"pointer",fontSize:"18px" }}
        
        ></i>
      </Link>

      <i className="fa-solid fa-xmark" 
      onClick={() =>{
        deleteTask(item?._id)
      }} 
      style={{ color:"red", cursor:"pointer",fontSize:"20px" }}></i>
      </div>
      
    </div>
    })
    
  );
};

export default Task;