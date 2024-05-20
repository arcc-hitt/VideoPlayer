import React from 'react'

const AddNewNoteButton = ({ handleClick }) => {
    return (
        <div>
            <button
                className='w-auto min-w-[152px] h-auto min-h-[40px] flex items-center gap-2 pr-4 pl-[14px] py-2 border border-[#D0D5DD] bg-white shadow-sm'
                onClick={handleClick}
            >
                <img src="/assets/plus_icon.svg" alt="Plus icon" className='w-5 h-5' />
                <span className='w-[94px] h-5 text-left text-sm font-semibold font-inter text-[#344054]'>
                    Add new note
                </span>
            </button>
        </div>
    )
}

export default AddNewNoteButton