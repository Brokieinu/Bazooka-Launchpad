import React from 'react';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 0 100px',
      }}
    >
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
