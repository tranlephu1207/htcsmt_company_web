import './Topbar.scss';

import MediaQuery from 'react-responsive'
import React from 'react';

const Topbar = ({
  menuOpen,
  setMenuOpen,
}) => {

  const renderTopbarRight = () => {
    return (
      <MediaQuery minWidth={992}>
        {(matches) =>
          matches
          ? 
          (
            <div className='right'>
              <a href='#intro'><p>Home</p></a>
              <p>Services</p>
              <p>About</p>
              <p>Work Site</p>
              <a href='#contact'><p>Contact</p></a>
            </div>
          )
          :
          (
            <div className='right_mobile'>
              <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line1"></span>
                <span className="line1"></span>
              </div>
            </div>
          )
        }
      </MediaQuery>
    )
  }

  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <img src='assets/logo.png' alt="logo"/>
          <MediaQuery minWidth={992}>
          {(matches) =>
            matches
            && 
            (
              <h3 className='display-linebreak'>
                {"HA TRANG\nTRADING CO.,LTD"}
              </h3>
            )}
          </MediaQuery>
        </div>
        {renderTopbarRight()}
      </div>
    </div>
  )
}

export default Topbar;