import React from 'react'

const Header = ({ title }) => {
  return (
    <div className='w-full h-auto flex justify-between items-center'>
        <span className='text-left leading-[38px] font-semibold font-inter text-3xl text-[#101828]'>
            {title}
        </span>
    </div>
  )
}

export default Header