import React from 'react';

import Nav from './Nav';
import HtmlTop from './htmlSkeleton/HtmlTop';
import HtmlBottom from './htmlSkeleton/HtmlBottom';

const Home = () => {
  return (
    <div className='content'>
      <Nav />
      <div className='home'>
        <HtmlTop />
        <div className='home__content'>
          <span className='html'>{`<h1>`}</span> <br />
          <h1 className='type-1'>Hi,</h1>
          <h1 className='type-2'>I'm Michał</h1>
          <h1 className='type-3'>
            web developer.
            <span
              style={{ marginLeft: '.6rem' }}
              className='html'
            >{`</h1>`}</span>
          </h1>
          <p className='type-4'>
            Full of passion Front End Developer
            <span className='home-mobile'> focused on React</span>.
          </p>
        </div>
        <HtmlBottom />
      </div>
    </div>
  );
};

export default Home;
