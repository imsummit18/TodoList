import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import DialogModal from './DialogModal'
import { Dialog } from '@headlessui/react'
import DeleteTodo from './DeleteTodo'

const TodoList = ({ tasks, setTasks }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [id, setId] = useState()
    console.log("the id is", id)
    const handelDelete = (id: any) => {
        const filterItems = tasks.filter((task) => task.id !== id)
        setTasks(filterItems);
        setIsOpen(false)
    }
    function closeModal() {
        setIsOpen(false)
    }

    return (
        <div>
            {
                tasks.map((task: any) => {
                    return (
                        <>
                            {
                                task.name.length > 0 &&
                                <div className='w-full bg-white rounded-lg p-3 mt-5 flex justify-between items-center'>
                                    <div className=''>
                                        <p>Task</p>
                                        <p className='text-[22px] font-medium mt-3'>{task.name}</p>
                                    </div>
                                    <div className='flex items-center '>
                                        <p className='text-green-500 cursor-pointer'><BiEdit size={30} /></p>
                                        <p className='text-red-500 cursor-pointer m-3'
                                            onClick={() => {
                                                setIsOpen(true)
                                                setId(task.id)
                                            }}
                                        ><AiFillDelete size={30} /></p>
                                    </div>
                                </div>
                            }
                        </>
                    )
                })
            }
            <DeleteTodo isOpen={isOpen} id={id} setIsOpen={setIsOpen} closeModal={closeModal} handelDelete={handelDelete} />



        </div>
    )
}

export default TodoList
