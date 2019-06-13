import React from 'react';
import ReactSVG from 'react-svg';

import NavItem from './NavItem';

const Nav = () => {
  return (
    <div className='navigation'>
      <div>
        <h1 className='navigation--signature' style={{ marginLeft: '.3rem' }}>
          {'M'}
        </h1>

        <h1
          className='navigation--signature'
          style={{
            marginLeft: '1.5rem',
            marginTop: '-2.2rem',
            fontSize: '5rem',
            color: '#ffff99'
          }}
        >
          {'J'}
        </h1>
      </div>
      <ul>
        <NavItem svg='home.svg' page='HOME' linkTo='/' />
        <NavItem svg='avatar.svg' page='ABOUT' linkTo='/about' />
        <NavItem svg='skills.svg' page='SKILLS' linkTo='/skills' />
        <NavItem svg='mywork.svg' page='MY_WORK' linkTo='/my-work' />
        <NavItem svg='email.svg' page='CONTACT' linkTo='/contact' />
      </ul>
      <ul>
        <li className='navigation__page navigation--mobile'>
          <a
            href='https://github.com/mjaniczko'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='navigation__link'>
              <ReactSVG
                src='svgs/git.svg'
                style={{ fill: '#888' }}
                className='navigation__link--svg'
              />
              <span className='navigation__link--text'>GITHUB</span>
            </div>
          </a>
        </li>

        <li className='navigation__page navigation--mobile'>
          <a
            href='https://www.linkedin.com/in/micha%C5%82-janiczko-aa41b0152/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='navigation__link'>
              <ReactSVG
                src='svgs/linkedin.svg'
                style={{ fill: '#888' }}
                className='navigation__link--svg'
              />
              <span className='navigation__link--text'>LINKEDIN</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
