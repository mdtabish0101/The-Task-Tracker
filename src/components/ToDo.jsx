 
import EditTask from "./EditTask";

const ToDo = ({task, index, taskList, setTaskList}) => {
    const handleDelete = e =>{
        let removeId = taskList.indexOf(task);
        taskList.splice(removeId, 1);
        setTaskList((currentTasks => currentTasks.filter(todo => todo.id !== e)))
    }
    return (
        <>
            <div className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg">
                <div className="w-full flex flex-row justify-between" >
                    <p className="font-semibold text-xl">{task.projectName}</p>
                    <EditTask 
                    index={index} 
                    task={task} 
                    taskList={taskList} 
                    setTaskList={setTaskList}/>
                </div>

                <p className="text-lg py-2">{task.taskDescription}</p>

                <div className="w-full flex justify-center" >
                    <button className="bg-red-500 rounded-lg text-white text-sm font-semibold uppercase py-1.5 px-3 mt-6 mb-1"
                    onClick={handleDelete}>
                        Delete</button>
                </div>
                    
            </div>
        </>
    )

}

export default ToDo;