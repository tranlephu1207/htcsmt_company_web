import './Topbar.scss';
import React from 'react';
import MediaQuery from 'react-responsive'

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
              <p>Home</p>
              <p>Services</p>
              <p>About</p>
              <p>Work Site</p>
              <p>Contact</p>
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
        </div>
        {renderTopbarRight()}
      </div>
    </div>
  )
}

export default Topbar;