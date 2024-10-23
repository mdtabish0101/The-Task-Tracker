import { useState } from "react"
import AddTask from "./components/AddTask"
import ToDo from "./components/ToDo";
function App() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList)
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
          <p className="text-xl">to add a new task</p>
        </div>
        <div>
          <h2 className="ml-6 max-w-lg my-4 px-4 text-xl text-white font-semibold w-3/4 py-2 bg-gray-600">
            To-Do:
          </h2>
          {taskList.slice(0).reverse().map((task, i) =>
            <>
              <ToDo key={new Date().getTime()} 
              task={task}
              index={i} 
              taskList={taskList}
              setTaskList={setTaskList}/>
            </>
          )}

        </div>
      </div>
    </>
  )
}

export default App
