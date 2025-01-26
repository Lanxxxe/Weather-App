import React from 'react'
import DarkModeToggler from './DarkModeToggler'

const Navigation = () => {
  return (
    <>
        <nav className='py-3 px-4 rounded-md flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <i className='wi wi-horizon text-green-500 font-bold text-3xl'></i>
                <p className='text-xl font-semibold text-white dark:text-slate-800 hover:cursor-pointer'>SkyCast</p>
            </div>
            
            <DarkModeToggler />
        </nav>
    </>
  )
}

export default Navigation