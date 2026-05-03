import React, { useContext, useState } from 'react'
import { authContext } from '../../Context/AuthProvider'

const CreateTask = () => {
  const authdata = useContext(authContext)
  const [TaskTitle , setTaskTitle] = useState('')
  const [TaskDesc , setTaskDesc] = useState('')
  const [TaskDate , setTaskDate] = useState('')
  const [assignTo , setAssignTo] = useState('')
  const [category , setCategory] = useState('')
  // const [newTask , setNewTask] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault()
    // setNewTask({TaskTitle,TaskDate,TaskDesc,category,assignTo,active:false,newTask:true,failed:true,completed:false})
    
    const newTask = {
  taskTitle: TaskTitle,
  taskDescription: TaskDesc,
  taskDate: TaskDate,
  category,
  active: false,
  newTask: true,
  failed: false,
  completed: false
}
    const data = JSON.parse(localStorage.getItem('employees'))

      data.forEach(function(elem){
        if(assignTo == elem.firstName){
          elem.tasks.push(newTask)
          elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
        }
      })

localStorage.setItem('employees', JSON.stringify(data))
    setTaskTitle('')
    setTaskDesc('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    
  }
  return (
    <div className="p-6 bg-[#1c1c1c] mt-7 rounded">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex justify-between gap-10">

          {/* LEFT SIDE */}
          <div className="w-1/2 flex flex-col gap-4">

            <div>
              <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
              <input
                value={TaskTitle}
                onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }}
                className="w-full text-sm py-2 px-3 rounded outline-none bg-transparent border border-gray-500"
                type="text"
                placeholder="Make a UI design"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-1">Date</h3>
              <input
                 value={TaskDate}
                onChange={(e)=>{
                  setTaskDate(e.target.value)
                }}
                className="w-full text-sm py-2 px-3 rounded outline-none bg-transparent border border-gray-500"
                type="date"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-1">Assign To</h3>
              <input
                 value={assignTo}
                onChange={(e)=>{
                  setAssignTo(e.target.value)
                }}
                className="w-full text-sm py-2 px-3 rounded outline-none bg-transparent border border-gray-500"
                type="text"
                placeholder="employee name"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-1">Category</h3>
              <input
                 value={category}
                onChange={(e)=>{
                  setCategory(e.target.value)
                }}
                className="w-full text-sm py-2 px-3 rounded outline-none bg-transparent border border-gray-500"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>

          </div>

          
          <div className="w-1/2 flex flex-col justify-between">

            <div>
              <h3 className="text-sm text-gray-300 mb-1">Description</h3>
              <textarea
                 value={TaskDesc}
                onChange={(e)=>{
                  setTaskDesc(e.target.value)
                }}
                className="w-full h-[150px] text-sm py-2 px-3 rounded outline-none bg-transparent border border-gray-500 resize-none"
              ></textarea>
            </div>

            <button className= " hover:scale-95 bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-5 w-full">
              Create Task
            </button>

          </div>

        </form>
      </div>
  )
}

export default CreateTask
