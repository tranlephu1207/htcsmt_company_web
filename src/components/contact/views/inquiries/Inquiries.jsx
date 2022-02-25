import './Inquiries.scss';

import MediaQuery from 'react-responsive'
import React from 'react';

const Inquiries = () => {
  return (
    <MediaQuery minWidth={992}>
      {(matches) =>
        matches
        ?
        (
          <div className='inquiries'>
            <div className='sections-inquiries'>
              <h1>Inquiries</h1>
              <br />
              <br />
              <p>For any inquiries, questions or commendations, please call: 408-980-8819 or fill out the following form</p>
              <br />
              <br />
              <form className='formContainer'>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Email'/>
                <input type='text' placeholder='Subject'/>
                <textarea className='message-form' type='text' placeholder='Message'/>
                <div class="row">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        )
        :
        (
          <div className='inquiries'>
            <div className='sections-inquiries-mobile'>
              <h1>Inquiries</h1>
              <br />
              <p>For any inquiries, questions or commendations, please call: 408-980-8819 or fill out the following form</p>
              <br />
              <br />
              <form className='formContainer'>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Email'/>
                <input type='text' placeholder='Subject'/>
                <textarea className='message-form' type='text' placeholder='Message'/>
                <div class="row">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        )
      }
    </MediaQuery>
  )
}

export default Inquiries;
