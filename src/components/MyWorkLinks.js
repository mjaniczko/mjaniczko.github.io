import React from 'react';

const MyWorkLinks = ({ liveLink, gitLink }) => {
  return (
    <div className='mywork__project--links'>
      <a href={liveLink} target='_blank' rel='noopener noreferrer'>
        <div className='mywork__project--link'>Live</div>
      </a>
      <a href={gitLink} target='_blank' rel='noopener noreferrer'>
        <div className='mywork__project--link'>Git</div>
      </a>
    </div>
  );
};

export default MyWorkLinks;
