import React from 'react'

function Task({task,deleteTask}) {
  return (
    <div style={{ marginBottom: 50, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <h3>{task.title}</h3>
        <button onClick={()=>{deleteTask(task.id)}}>{"X"}</button>
        <p>{task.completed?"Completed":"Not Completed"}</p>
    </div>
  )
}

export default Task