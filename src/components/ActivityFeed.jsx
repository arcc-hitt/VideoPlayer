import React from 'react'

const Button = ({ text }) => {
    return (
        <button className='flex justify-center items-center px-2.5 py-1 w-auto h-auto min-h-7 min-w-[98px] border border-[#D0D5DD] bg-white rounded-tl-lg shadow-sm'>
            <span className='text-sm font-medium font-inter text-[#344054]'>
                {text}
            </span>
        </button>
    );
};

const ActivityFeed = ({ date = '20 May 24', timeStamp = '00 min 00 sec', note = 'No Note Available' }) => {
    return (
        <div className='w-full min-w-[1328px] h-auto min-h-[153px] flex flex-col gap-4'>
            <div className='w-full min-w-[1328px] h-auto min-h-[136px] flex flex-col gap-3'>
                {/* Date and Timestamp */}
                <div className='w-full min-w-[1328px] h-auto min-h-[40px] flex flex-col gap-2'>
                    <span className='w-[72px] h-[20px] text-left font-medium font-inter text-sm text-[#344054]'>
                        {date}
                    </span>
                    <div className='w-full min-w-[1328px] h-auto min-h-[20px] flex flex-row gap-1'>
                        <span className='text-left font-normal font-inter text-sm text-[#475467]'>
                            Timestamp:
                        </span>
                        <span className='text-left font-medium font-inter text-sm text-[#6941C6]'>
                            {timeStamp}
                        </span>
                    </div>
                </div>

                {/* Note description */}
                <div className='w-full min-w-[1328px] h-auto min-h-[44px] p-3 flex flex-col gap-2 bg-white border border-[#EAECF0] rounded-tr-lg rounded-b-lg shadow-sm'>
                    <span className='w-[1304px] h-[20px] text-left font-normal font-inter text-sm text-[#344054]'>
                        {note}
                    </span>
                </div>

                {/* Edit and Delete buttons */}
                <div className='w-full min-w-[1328px] h-auto min-h-[28px] flex flex-row justify-end gap-1'>
                    <Button text="Edit" />
                    <Button text="Delete" />
                </div>
            </div>
            {/* Divider */}
            <div className='w-full border-b border-[#EAECF0]'></div>
        </div>
    )
}

export default ActivityFeed