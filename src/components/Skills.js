import React from 'react';

import Nav from './Nav';
import HtmlTop from './htmlSkeleton/HtmlTop';
import HtmlPageTitle from './htmlSkeleton/HtmlPageTitle';
import HtmlBottom from './htmlSkeleton/HtmlBottom';
import SkillsImg from './SkillsImg';

const Skills = () => {
  return (
    <div className='content'>
      <Nav />
      <div className='home'>
        <HtmlTop />
        <div className='about__content'>
          <div className='skills_wrapper'>
            <HtmlPageTitle title='Skills & experience' />
            <p className='about__text'>
              The main area of my actual experience and interests is front end
              development. <br />
              HTML, CSS with SASS and BEM, JS with REACT. <br />
              Right now I'm learning REDUX and Cypress to make my skills
              complete as a front end developer. <br /> <br />I know also a bit
              of back end technologies like Python, Node.js, MongoDB, Postgresql
              as well. <br />
              Today Python is by far my best one back technology, but I'm
              learning daily.
            </p>
            <div className='skills__list'>
              <SkillsImg skill='sass' />
              <SkillsImg skill='js' />
              <SkillsImg skill='react' />
              <SkillsImg skill='redux' />
              <SkillsImg skill='python' />
            </div>
          </div>
          <div />
        </div>
        <HtmlBottom />
      </div>
    </div>
  );
};

export default Skills;
