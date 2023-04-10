import "../App.css"
import { useState } from "react";

const Addtask = ({ addTask }) => {
  const [task,setTask] = useState('');
  const [date,setDate] = useState('');
  const [reminder,setReminder] = useState(false);

  function onsubmit(e){
    e.preventDefault() ;   

    addTask({task,date,reminder});

    setTask('')
    setDate('')
    setReminder(false)
  }

  return (
    <form className="form" onSubmit={onsubmit}>
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
      <h6 className="setReminder">Set Reminder</h6>
      <input type="checkbox" className="me-5 checkbox"
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
  );
};

export default Addtask;