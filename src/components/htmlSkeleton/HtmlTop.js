import React from 'react';

const HtmlTop = () => {
  return (
    <div>
      <span className='html'>{`<html>`}</span> <br />
      <p style={{ marginTop: '2rem' }}>
        <span className='html--body'>{`<body>`}</span>
      </p>
    </div>
  );
};

export default HtmlTop;
