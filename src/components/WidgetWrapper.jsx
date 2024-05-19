import React from 'react';

const WidgetWrapper = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`w-full h-auto p-6 flex flex-col gap-6 bg-white border border-[#EAECF0] rounded-2xl shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default WidgetWrapper;