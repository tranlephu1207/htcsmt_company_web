import './Address.scss';

import MediaQuery from 'react-responsive'
import React from 'react';

const Address = () => {
  return (
    <MediaQuery minWidth={992}>
    {(matches) =>
      matches
      ?
      (
        <div className='address'>
          <div className='sections-address'>
            <h1>Head Office</h1>
            <br />
            <br />
            <p>General Electronics Assembly</p>
            <p>1525 Atteberry Lane</p>
            <p>San Jose, CA 95131</p>
            <br />
            <p>info@geamfg.com</p>
            <p>Tel: 408-980-8819</p>
            <p>Fax: 866-568-0768</p>
            <br/>
            <br />
            <br />
            <h1>Employment</h1>
            <br />
            <p>To apply for a job in General Electronics Assembly, please send a cover letter along with your C.V to: info@geamfg.com</p>
            <br />
            <br />
            <div className='line'/>
            <h2>Get a quote: 408-980-8819</h2>
          </div>
        </div>
      )
      :
      (
        <div className='address'>
          <div className='sections-address mobile'>
            <h1>Head Office</h1>
            <br />
            <p>General Electronics Assembly</p>
            <p>1525 Atteberry Lane</p>
            <p>San Jose, CA 95131</p>
            <br />
            <p>info@geamfg.com</p>
            <p>Tel: 408-980-8819</p>
            <p>Fax: 866-568-0768</p>
            <br/>
            <br />
            <br />
            <h1>Employment</h1>
            <p>To apply for a job in General Electronics Assembly, please send a cover letter along with your C.V to: info@geamfg.com</p>
            <br />
            <br />
            <div className='line'/>
            <h2>Get a quote: 408-980-8819</h2>
          </div>
        </div>
      )
    }
    </MediaQuery>
  )
}

export default Address;
