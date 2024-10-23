import { useEffect, useState } from "react"

const EditTask = ({task, taskList, setTaskList}) => {
    const [editModal, setEditModal] = useState(false)
    const [projectName, setProjectName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")

    useEffect(()=>{
        setProjectName(task.projectName);
        setTaskDescription(task.taskDescription);
    }, [])
    const handleInput = e => {
        const { name, value } = e.target;
        if (name === "projectName") setProjectName(value)
        if (name === "taskDescription") setTaskDescription(value)
    }

    const handleEdit = e => {
        e.preventDefault();
        let taskIndex = taskList.indexOf(task);
        taskList.splice(taskIndex, 1);
        setTaskList(
            [...taskList, { projectName, taskDescription }]
        );
        setEditModal(false);
    }
    return (
        <>
            <button className="bg-gray-400 font-semibold text-sm rounded-md uppercase text-white py-1 px-2"
                onClick={() => setEditModal(true)}>Edit</button>
            {editModal ? (
                <>
                    <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
                        <div className="w-9/12 max-w-lg bg-white rounded-lg shadow-md relative flex flex-col">

                            <div className="flex flex-row justify-between p-5 border-b border-slate-200 rounded-t ">
                                <h3 className=" text-2xl font-semibold">
                                    Edit Task
                                </h3>
                                <button className="px-2 text-gray-400 text-3xl leading-none font-semibold block"
                                    onClick={() => setEditModal(false)}>X</button>

                            </div>
                            <form className="px-6 pt-6 pb-4">
                                <div>
                                    <label className="tracking-wide uppercase text-gray-700 text-xs font-semibold mb-2 pl-2.5 block"
                                        htmlFor="project-name">Project Name</label>
                                    <input className="w-full bg-gray-200 text-gray-800 border border-gray-200 rounded-md py-2 px-4 mb-5 leading-tight focus:outline-none focus:bg-gray-100"
                                        id="project-name"
                                        type="text"
                                        name="projectName"
                                        value={projectName}
                                        onChange={handleInput}
                                        placeholder="project name"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                <div>
                                    <label className="tracking-wide uppercase text-gray-700 text-xs font-semibold mb-2 pl-2.5 block" htmlFor="">Task Description</label>
                                    <textarea
                                        id="task-description"
                                        rows='5'
                                        placeholder="Task Description"
                                        autoComplete="off"
                                        name="taskDescription"
                                        value={taskDescription}
                                        onChange={handleInput}
                                        className="w-full bg-gray-200 text-gray-800 border border-gray-200 rounded-md py-2 px-4 mb-5 leading-tight focus:outline-none focus:bg-gray-100" />
                                </div>
                            </form>
                            <div className="flex justify-end p-6 border-t border-slate-200 rounded-b">
                                <button className="bg-violet-500 text-white font-semibold py-3 px-6 rounded-md uppercase hover:bg-violet-600 active:bg-violet-700"
                                    onClick={handleEdit}>
                                    Update Task
                                </button>
                            </div>


                        </div>

                    </div>

                </>
            ) : null}
        </>
    )
}

export default EditTask