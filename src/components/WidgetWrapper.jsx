import React from 'react';

const WidgetWrapper = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`w-full p-4 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6 bg-white border border-[#EAECF0] rounded-2xl shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default WidgetWrapper;
