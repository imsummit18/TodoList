import React, { useEffect, useState } from 'react'

import { AiOutlinePlus, AiFillDelete } from 'react-icons/ai'

import DialogModal from './DialogModal'
import TodoList from './Todoist'
import { Dialog } from '@headlessui/react'
import Button from './Button'
const Addtask = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [text, setText] = useState("")

    const localState = JSON.parse(localStorage.getItem("tasks"));
    const [tasks, setTasks] = useState(localState || [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const handleAdd = () => {
        setIsOpen(false);
        setTasks([...tasks, { id: new Date().getTime().toString(), name: text }])
        setText("")
    }


    return (
        <>
            <div>
                <div>
                    <div className='flex items-center justify-between w-full'>
                        <h1 className='text-3xl'>Task List</h1>
                      <div onClick={openModal}>
                      <Button
                        > <AiOutlinePlus className='mr-3' />Add Task</Button>
                      </div>
                    </div>

                    {/* modal */}

                    <DialogModal isOpen={isOpen} closeModal={closeModal}>
                        <Dialog.Panel className="w-[600px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                                as="h3"
                                className="text-[30px] font-bold leading-6 text-gray-900"
                            >
                                Add Task
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-lg mt-3 text-gray-500">
                                    Task
                                </p>
                                <input type="text"
                                    className='p-3 mt-3 w-full rounded-lg border-2 focus:outline-none border-gray-400'
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </div>

                            <div className="mt-4">
                                <button
                                    type="button"
                                    className=" mt-5  inline-flex justify-center rounded-md border border-transparent bg-gray-400 px-6 py-2 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={handleAdd}
                                >
                                    Add
                                </button>
                            </div>
                        </Dialog.Panel>
                    </DialogModal>
                </div>


                {/* todo list */}
                <div>
                    <TodoList tasks={tasks} setTasks={setTasks} />
                </div>



            </div>

        </>
    )
}

export default Addtask
