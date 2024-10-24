
import { useEffect, useState } from "react";
import EditTask from "./EditTask";
import { useDrag } from "react-dnd";

const ToDo = ({ task, index, taskList, setTaskList, handleDelete }) => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false)
    const [{isDragging}, drag] = useDrag(()=>({
        type:"todo",
        item: {
            id: index,
            projectName: task.projectName,
            taskDescription: task.taskDescription,
            timestamp: task.timestamp,
            duration: task.duration,
            time, // pass the time state
            running // pass the running state
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10)
            },10)
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [running]);
    // const handleDelete = (id) => {
    //     let removeId = taskList.indexOf(task);
    //     taskList.splice(removeId, 1);
    //     setTaskList((currentTasks => currentTasks.filter(todo => todo.id !== id)))
    // }
    return (
        <>
            <div className="fflex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 lg:w-3/4 max-w-lg" ref={drag}>
                <div className="w-full flex flex-row justify-between" >
                    <p className="font-semibold text-lg lg:text-xl">{task.projectName}</p>
                    <EditTask
                        index={index}
                        task={task}
                        taskList={taskList}
                        setTaskList={setTaskList} />
                </div>

                <p className="text-md lg:text-lg py-2">{task.taskDescription}</p>

                <div className="w-full flex flex-col items-center justify-center  ">
                    <div className="text-xl font-semibold py-4 flex justify-center">
                        {/* Hours */}
                        <span>{("0" + Math.floor(time / 3600000)).slice(-2)}:</span>
                        {/* Minutes */}
                        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                        {/* Seconds */}
                        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                        {/* Milliseconds */}
                        <span className="text-sm">{("0" + Math.floor((time % 1000) / 10)).slice(-2)}</span>
                    </div>
                    <div className="w-full max-w-xs flex flex-row justify-center space-x-3">
                        {running ? (

                            <button className="border rounded-lg py-1 px-3"
                                onClick={() => { setRunning(false) }}
                            >Stop</button>

                        ) : (

                            <button className="border rounded-lg py-1 px-3"
                                onClick={() => { setRunning(true) }}
                            >Start</button>

                        )}
                        <button className="border rounded-lg py-1 px-3"
                            onClick={() => { setTime(0); setRunning(false) }}
                        >Reset</button>
                    </div>
                </div>

                <div className="w-full flex justify-center" >
                    <button className="bg-red-500 rounded-lg text-white text-sm font-semibold uppercase py-1.5 px-3 mt-6 mb-1 hover:bg-red-600"
                        onClick={()=>handleDelete(task.id)}>
                        Delete
                    </button>
                </div>

            </div>
        </>
    )

}

export default ToDo;