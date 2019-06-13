import React from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

const NavItem = ({ svg, page, linkTo }) => {
  return (
    <li className='navigation__page'>
      <Link to={linkTo}>
        <div className='navigation__link'>
          <ReactSVG
            src={`svgs/${svg}`}
            style={{ fill: '#888' }}
            className='navigation__link--svg'
          />
          <span className='navigation__link--text'>{page}</span>
        </div>
      </Link>
    </li>
  );
};

export default NavItem;
