import React from 'react'
import Divider from './Divider'
import AddNewNoteButton from './AddNewNoteButton'

const SectionHeader = ({ title, desc, button, buttonClick }) => {
    return (
        <>
            <div className='w-full min-w-[1320px] h-auto min-h-[73px] flex flex-col gap-5'>
                <div className='w-full h-auto flex flex-row justify-between'>
                    
                    {/* Title and Description */}
                    <div className='w-full min-w-[1160px] h-auto min-h-[52px] flex flex-col justify-between gap-1'>
                        <span className='w-[1160px] h-[28px] text-left font-semibold font-inter text-lg text-[#101828]'>
                            {title}
                        </span>
                        <span className='w-[1160px] h-5 text-left font-normal font-inter text-sm text-[#475467]'>
                            {desc}
                        </span>
                    </div>

                    {/* Add Button */}
                    {button && (
                        <AddNewNoteButton handleClick={buttonClick} />
                    )}
                </div>

                {/* Divider */}
                <Divider />
            </div>
        </>
    )
}

export default SectionHeader