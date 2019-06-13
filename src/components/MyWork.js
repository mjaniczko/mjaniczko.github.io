import React, { useState } from 'react';

import Nav from './Nav';
import projects from '../projects.json';
import MyWorkLinks from './MyWorkLinks';

const MyWork = () => {
  const [position, setPosition] = useState(0);
  const projectsLength = Object.keys(projects).length;
  const project = Object.values(projects)[position];
  const { title, imgSrc, gitLink, liveLink, description } = project;

  const handleLeftArrow = () => {
    position - 1 >= 0
      ? setPosition(position - 1)
      : setPosition(projectsLength - 1);
  };

  const handleRightArrow = () => {
    position + 1 <= projectsLength - 1
      ? setPosition(position + 1)
      : setPosition(0);
  };

  return (
    <div className='content'>
      <Nav />
      <div className='mywork'>
        <div className='mywork__project'>
          <h1 className='mywork__project--title'>{title}</h1>
          <div className='mywork__carousel'>
            <button className='arrows previous' onClick={handleLeftArrow} />
            <div className='mywork__img'>
              <img src={imgSrc} alt='' width='100%' height='100%' />
            </div>
            <button className='arrows next' onClick={handleRightArrow} />
          </div>
          <p className='mywork__project--description'>{description}</p>
          <MyWorkLinks gitLink={gitLink} liveLink={liveLink} />
        </div>
      </div>
    </div>
  );
};

export default MyWork;
