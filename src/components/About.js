import React from 'react';

import Nav from './Nav';
import HtmlTop from './htmlSkeleton/HtmlTop';
import HtmlBottom from './htmlSkeleton/HtmlBottom';
import HtmlPageTitle from './htmlSkeleton/HtmlPageTitle';

const About = () => {
  return (
    <div className='content'>
      <Nav />
      <div className='home'>
        <HtmlTop />
        <div className='about__content'>
          <div>
            <HtmlPageTitle title='About me' />
            <p className='about__text'>
              Maybe some people dream about having supernatural powers <br />
              but for me programming perfect cods is a dream. And it seems{' '}
              <br />
              to be much more interesting, useful…
              <br /> <br />
              2019-03 - My first commercial work in the IT industry as a
              front-end developer <br /> in Riot Agency located in Poland,
              Krakow. <br /> <br />
              I'm passionate about programming and I believe that it can make
              lives of people easier. <br />
              I'm a music lover, martial arts enthusiast, minimalist with huge
              hunger for knowledge. <br />
              <span style={{ fontStyle: 'italic' }}>
                <br /> <br /> <br />
                “Everyday life is like programming, I guess. If you love
                something you can put beauty into it.” <br />― Donald Knuth
              </span>
            </p>
          </div>
        </div>
        <HtmlBottom />
      </div>
    </div>
  );
};

export default About;
