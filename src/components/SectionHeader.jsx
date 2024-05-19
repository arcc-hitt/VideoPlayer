import React from 'react'

const SectionHeader = ({ title, desc }) => {
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
                    <button className='w-auto min-w-[152px] h-auto min-h-[40px] flex items-center gap-2 pr-4 pl-[14px] py-2 border border-[#D0D5DD] bg-white shadow-sm'>
                        <img src="/assets/plus_icon.svg" alt="Plus icon" className='w-5 h-5' />
                        <span className='w-[94px] h-5 text-left text-sm font-semibold font-inter text-[#344054]'>
                            Add new note
                        </span>
                    </button>
                </div>

                {/* Divider */}
                <div className='w-full border-b border-[#EAECF0]'></div>
            </div>
        </>
    )
}

export default SectionHeader