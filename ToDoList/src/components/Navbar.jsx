import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='bg-indigo-900 text-white p-2 w-full flex justify-around '>
            <div className="logo text-xl font-bold ml-28">iTask</div>
            <div className="tags flex gap-4">
                <div className="home text-lg hover:font-bold cursor-pointer">Home</div>
                <div className="tasks text-lg hover:font-bold cursor-pointer">Tasks</div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
