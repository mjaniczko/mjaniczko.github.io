import React from 'react';

const HtmlBottom = () => {
  return (
    <div>
      <span className='html--body'>{`</body>`}</span> <br />
      <p style={{ marginTop: '2rem' }}>
        <span className='html'>{`</html>`}</span>
      </p>
    </div>
  );
};

export default HtmlBottom;
