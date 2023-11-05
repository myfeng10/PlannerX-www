import React, { useState } from 'react';

const AlertMessages = ({ messages }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || !messages || messages.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      <div style={{ height: '50px' }}></div>
      <div className="row">
        <div className="col-md-9 mx-auto mb-3">
          <div className="alert alert-success alert-dismissable">
            <button
              onClick={() => setIsVisible(false)}
              type="button"
              className="close"
              aria-label="Close"
              style={{
                position: 'relative',
                zIndex: 1,
              }}
            >
              &times;
            </button>
            {messages.map((message, index) => (
              <div key={index} className="alert font-weight-bold m-0 p-0">
                {message}
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AlertMessages;
