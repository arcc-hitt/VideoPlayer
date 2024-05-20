import React from 'react';
import Divider from './Divider';
import AddNewNoteButton from './AddNewNoteButton';

const SectionHeader = ({ title, desc, button, buttonClick }) => {
    return (
        <>
            <div className='w-full h-auto flex flex-col gap-5'>
                <div className='w-full h-auto flex flex-col sm:flex-row justify-between items-start sm:items-center'>
                    
                    {/* Title and Description */}
                    <div className='w-full h-auto flex flex-col justify-between gap-1'>
                        <span className='w-full text-left font-semibold font-inter text-lg text-[#101828]'>
                            {title}
                        </span>
                        <span className='w-full text-left font-normal font-inter text-sm text-[#475467]'>
                            {desc}
                        </span>
                    </div>

                    {/* Add Button */}
                    {button && (
                        <div className='mt-4 sm:mt-0'>
                            <AddNewNoteButton handleClick={buttonClick} />
                        </div>
                    )}
                </div>

                {/* Divider */}
                <Divider />
            </div>
        </>
    );
}

export default SectionHeader;
