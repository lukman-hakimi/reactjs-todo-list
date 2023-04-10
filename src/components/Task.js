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
        <h5 className="task">{item?.task}</h5>
        <h6 className="date">{item?.date}</h6>
      </div>

      <div className="actions">
      <Link to={`/showtask/${item?._id}`}>
        <i className="fa-solid fa-check update" 
        
        
        
        ></i>
      </Link>

      <i className="fa-solid fa-xmark del" 
      onClick={() =>{
        deleteTask(item?._id)
      }} 
      ></i>
      </div>
      
    </div>
    })
    
  );
};

export default Task;