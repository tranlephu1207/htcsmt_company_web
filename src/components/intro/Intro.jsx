import './Intro.scss';

import React from 'react';

const Intro = () => {

  return (
    <div className='intro' id='intro'>
      <h1>
        {"LEADERS IN QUALITY\nAND SERVICE IN\nELECTRONIC ASSEMBLY"}
        <br />
        <br />
        <a href="#contact">
          <img src="assets/arrow_down.svg" alt="" />
        </a>
      </h1>
    </div>
  )
}

export default Intro;
