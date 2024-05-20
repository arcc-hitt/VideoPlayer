import React from 'react'

const AddNewNoteButton = ({ handleClick }) => {
    return (
        <div>
            <button
                className='btn-secondary'
                onClick={handleClick}
            >
                <img src="/assets/plus_icon.svg" alt="Plus icon" className='w-5 h-5' />
                <span className='btn-secondary-text'>
                    Add new note
                </span>
            </button>
        </div>
    )
}

export default AddNewNoteButton