import { useState } from "react"
import AddTask from "./components/AddTask"
import ToDo from "./components/ToDo";
import { useDrop } from "react-dnd";
function App() {
  const [taskList, setTaskList] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handleDelete = (id) => {
    setTaskList((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  const [{isOver}, drop] = useDrop(()=>({
    accept: "todo",
    drop: (item)=>addToCompleted(item.id, item.projectName, item.taskDescription, item.timestamp, item.duration),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),

    })
  }))

  const addToCompleted = (id, projectName, taskDescription, timestamp, duration, time, running) => {
    const moveTask = taskList.filter((task) => id === task.id)[0];
    const taskCopy = { ...moveTask, time, running }; // Create a deep copy
    setCompleted((completed) => [...completed, taskCopy]);
};



  return (
    <>
      <div>
        <h1 className="text-2xl font-bold py-6 pl-6">
          The Task Tracker
        </h1>
        <p className="text-xl pl-6">Hi there!!</p>
        <div className="flex flex-row items-center">
          <p className="text-xl pl-6">Click </p>
          <AddTask taskList={taskList} setTaskList={setTaskList} />
          <p className="text-xl my-2">to add a new task</p>
        </div>


        <div className="flex flex-col lg:flex-row lg:justify-around">

          <div className="w-full lg:w-1/2 p-4"> 
            <h2 className="ml-6 max-w-lg my-4 px-4 text-xl text-white font-semibold w-3/4 py-2 bg-gray-600">
              To-Do:
            </h2>
            {taskList.map((task, i) => (
              <ToDo key={i}
                task={task}
                index={i}
                taskList={taskList}
                setTaskList={setTaskList}
                handleDelete={handleDelete} />
            ))}
          </div>

          
          <div className="w-full lg:w-1/2 p-4 mt-4 lg:mt-0" ref={drop}> 
            <h2 className="ml-6 max-w-lg my-4 px-4 text-xl text-white font-semibold w-3/4 py-2 bg-gray-600">
              Completed:
            </h2>

            {completed.map((task, i) => (
              <ToDo key={i}
                task={task}
                index={i}
                taskList={taskList}
                setTaskList={setTaskList}
                handleDelete={handleDelete} />
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default App
