import React from 'react'
import Divider from './Divider';

const Button = ({ text, onClick }) => {
  return (
    <button
      className='btn-primary'
      onClick={onClick}
    >
      <span className='btn-primary-text'>
        {text}
      </span>
    </button>
  );
};

const ActivityFeed = ({ notes, onEdit, onDelete, onTimestampClick }) => {
  return (
    <div className='w-full h-auto flex flex-col gap-4'>
      {notes.map(note => (
        <div key={note.id} className='w-full h-auto flex flex-col gap-3'>

          {/* Date and Timestamp */}
          <div className='w-full h-auto flex flex-col gap-2'>
            <span className='w-auto text-left font-medium font-inter text-sm text-[#344054]'>
              {note.date}
            </span>

            <div className='w-full h-auto flex flex-row gap-1'>
              <span className='text-left font-normal font-inter text-sm text-[#475467]'>
                Timestamp:
              </span>
              <span
                className='text-left font-medium font-inter text-sm text-[#6941C6] cursor-pointer'
                onClick={() => onTimestampClick(note.timestamp)}
              >
                {new Date(note.timestamp * 1000).toISOString().substr(11, 8)}
              </span>
            </div>
          </div>

          {/* Note description */}
          <div className='w-full h-auto p-3 flex flex-col gap-2 bg-white border border-[#EAECF0] rounded-lg shadow-sm'>
            <span className='w-full text-left font-normal font-inter text-sm text-[#344054]'>
              {note.content}
            </span>
          </div>

          {/* Edit and Delete buttons */}
          <div className='w-full h-auto flex flex-row justify-end gap-1'>
            <Button text="Edit" onClick={() => onEdit(note.id, prompt('Edit note:', note.content))} />
            <Button text="Delete" onClick={() => onDelete(note.id)} />
          </div>

          <Divider />
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;