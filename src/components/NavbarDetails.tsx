import React from 'react'

const NavbarDetails:React.FC = () => {
  return (
    <div className='flex flex-row gap-5 items-center '>
        <h1 className='flex font-bold text-xl cursor-pointer'>Conatct</h1>
        <button className='flex cursor-pointer border w-25 h-10 text-center
         justify-center 
          items-center shadow-xl bg-[#FFD700] rounded-md'>Login</button>
      
    </div>
  )
}

export default NavbarDetails
