import React, { useState } from 'react';

const AlertMessages = ({ messages }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || !messages || messages.length === 0) {
    return null;
  }

  return (
    <div className="font-sans mx-72 pb-10">
        <div className="p-4 text-lg bg-green-100 text-green-900 rounded-lg relative">
                <button
                  onClick={() => setIsVisible(false)}
                  type="button"
                  className="close absolute top-0 right-0 m-2 "
                  aria-label="Close"
                >
                  &times;
                </button>
                <div className="flex flex-col">
                {messages.map((message, index) => (
                  <div key={index} className="font-bold m-0 p-0">
                    {message}
                  </div>
                ))}
                </div>
          </div>
    </div>
       
  );
  
};

export default AlertMessages;
