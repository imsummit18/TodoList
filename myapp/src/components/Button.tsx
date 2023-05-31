import React from 'react'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'



const Button = ({className,children}) => {

    function cn(...input: any) {
        return twMerge(clsx(input));
    }
    return (
        <>
            <button className={cn('bg-purple-500 flex  hover:brightness-90 items-center  focus:outline-none  p-4 rounded-lg text-white text-[22px]',className)}>
            {children}
            </button>
        </>
    )
}

export default Button
