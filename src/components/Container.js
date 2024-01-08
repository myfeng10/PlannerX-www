import React from 'react';

function Container({ children, color }) {
    return (
        <div className={`p-5 bg-bg-darkgrey rounded-lg border-l-4 ${color} `}>
            {children}
        </div>
    );
}

export default Container;
