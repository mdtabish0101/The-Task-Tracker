import { useState } from "react"

const AddTask = ({ taskList, setTaskList }) => {
    const [addModal, setAddModal] = useState(false)
    const [projectName, setProjectName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleInput = e => {
        const { name, value } = e.target;
        if (name === "projectName") {
            setProjectName(value);
            setErrorMessage("")
        }
        if (name === "taskDescription") {
            setTaskDescription(value)
            setErrorMessage("")
        }
    }

    const handleAdd = (e) => {
        e.preventDefault();


        if (!projectName && !taskDescription) {
            setErrorMessage("Enter both Project Name and Task Description");
            return;
        }
        if (!projectName) {
            setErrorMessage("Enter Project Name");
            return;
        }
        if (!taskDescription) {
            setErrorMessage("Enter Task Description");
            return;
        } else {
            let timestamp = new Date();
            let id = Date.now()
            setTaskList([
                ...taskList,
                { id, projectName, taskDescription, timestamp }
            ]);


            setAddModal(false);
            setProjectName("");
            setTaskDescription("");
        }
    };

    return (
        <>
            <button className=" text-white uppercase py-1 mx-1.5 pr-2 pl-1 rounded-lg font-semibold bg-violet-500 hover:bg-violet-600 active:bg-violet-700 "
                onClick={() => setAddModal(true)}>+ New</button>
            {addModal ? (
                <>
                    <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
                        <div className="w-11/12 md:w-8/12 lg:w-1/2 xl:w-1/3 bg-white rounded-lg shadow-md relative flex flex-col">

                            <div className="flex flex-row justify-between p-5 border-b border-slate-200 rounded-t ">
                                <h3 className="text-xl lg:text-2xl font-semibold">
                                    New Task Added
                                </h3>
                                <button className="rounded-full px-4 text-gray-400 text-3xl leading-none font-semibold block active:bg-gray-200 hover:bg-gray-100 py-1 "
                                    onClick={() => setAddModal(false)}>X</button>

                            </div>
                            <form className="px-6 pt-6 pb-4" onSubmit={handleAdd}>
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
                                    <p className="text-red-500 text-center mt-2">{errorMessage}</p>
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
                                    onClick={handleAdd}>
                                    Add Task
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    )
}


export default AddTask
