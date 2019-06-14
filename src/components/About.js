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
              Who doesn't wonder "how would it be to have superpower?", <br />
              Maybe lasers from the eyes are epic, but I truly believe that{' '}
              <br />
              coding is also superpower and seems a bit more useful.
              <br /> <br />
              2019-03 - My first commercial work in IT industry as front-end
              developer <br /> in Riot Agency located in Poland, Krakow. <br />{' '}
              <br />
              I'm extremely passionate about programming, I want make people
              life easier. <br />
              Right now I'm focusing on front end development but also doing
              some back end stuff <br />
              with Node and Python, databases. In future hope to try myself in
              AI. <br /> <br />
              Music lover, combat arts passionate, minimalist with huge hunger
              of knowledge. <br />
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
