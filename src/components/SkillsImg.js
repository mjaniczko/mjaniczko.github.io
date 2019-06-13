import React from 'react';

const SkillsImg = ({ skill }) => {
  return (
    <img
      className='skills__imgs'
      src={`./imgs/${skill}.png`}
      alt={`${skill} logo`}
    />
  );
};

export default SkillsImg;
