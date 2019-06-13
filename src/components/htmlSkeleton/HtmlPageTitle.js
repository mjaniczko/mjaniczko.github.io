import React from 'react';

const HtmlPageTitle = ({ title }) => {
  return (
    <div>
      <span className='html'>{`<h1>`}</span> <br />
      <h1 className='page-title'>{title}</h1>
      <span className='html'>{`</h1>`}</span>
    </div>
  );
};

export default HtmlPageTitle;
