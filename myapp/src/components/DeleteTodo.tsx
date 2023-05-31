import React, { useState } from 'react'
import DialogModal from './DialogModal'
import { Dialog } from '@headlessui/react'
import Button from './Button'

const DeleteTodo = ({isOpen,closeModal,handelDelete,setIsOpen,id}) => {
    return (
        <div>


            <DialogModal isOpen={isOpen} closeModal={closeModal}>
                <Dialog.Panel className="max-w-[600px] m-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title  as="h4" className="text-[30px] my-8 font-medium text-center leading-6 text-gray-900" >
                        Are you sure want to delete this task?
                    </Dialog.Title>
                    <div className="mt-4 flex w-[200px] m-auto">
                     <div onClick={()=>handelDelete(id)} >
                     <Button className="py-2 px-4 ">Delete</Button>
                     </div>
                   <div onClick={()=>setIsOpen(false)}>
                   <Button className="bg-white text-black ml-5 border-2 border-gray-400 py-2 px-4">Cancel</Button>
                   </div>
                    </div>
                </Dialog.Panel>
            </DialogModal>

        </div>
    )
}

export default DeleteTodo
