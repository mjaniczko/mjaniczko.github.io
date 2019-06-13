import React from 'react';
import ReactSVG from 'react-svg';
import Nav from './Nav';
import HtmlTop from './htmlSkeleton/HtmlTop';
import HtmlBottom from './htmlSkeleton/HtmlBottom';
import HtmlPageTitle from './htmlSkeleton/HtmlPageTitle';

const Contact = () => {
  return (
    <div className='content'>
      <Nav />
      <div className='home'>
        <HtmlTop />
        <div className='home__content'>
          <HtmlPageTitle title='Contact via' />
          <div
            style={{ display: 'flex', marginBottom: '20px', marginTop: '5rem' }}
          >
            <ReactSVG
              src='/svgs/contact-email.svg'
              className='contact__svg'
              style={{ marginLeft: '-.5rem' }}
            />
            <p style={{ fontSize: '1.8rem' }}>
              :{' '}
              <span style={{ color: '#08fdd8' }}>michaljaniczko@gmail.com</span>
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              marginBottom: '20px',
              fontSize: '1.8rem'
            }}
          >
            <ReactSVG src='/svgs/git.svg' className='contact__svg' />
            <p>
              :
              <a
                href='https://github.com/mjaniczko'
                target='_blank'
                rel='noopener noreferrer'
                style={{ cursor: 'pointer' }}
              >
                {' '}
                Github
              </a>
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              marginBottom: '20px',
              fontSize: '1.8rem'
            }}
          >
            <ReactSVG src='/svgs/linkedin.svg' className='contact__svg' />
            <p>
              :
              <a
                href='https://www.linkedin.com/in/micha%C5%82-janiczko-aa41b0152/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ cursor: 'pointer' }}
              >
                {' '}
                Linkedin
              </a>
            </p>
          </div>

          <br />
          <p className='contact__info'>
            Alway ready to take a part in interesting challenges. <br />
            If you have any questions don't be shy and contact me by the one of
            the ways I listed above.
          </p>
        </div>
        <HtmlBottom />
      </div>
    </div>
  );
};

export default Contact;
