import './Contact.scss';

import {
  Address,
  Inquiries,
} from './views';

import MediaQuery from 'react-responsive'
import React from 'react';

const Contact = () => {
  return (
    <MediaQuery minWidth={992}>
      {(matches) =>
        matches
        ?
        (
          <div className='contact' id='contact'>
            <div className='contact-view'>
              <br />
              <h1 className='contact-title'>Contact</h1>
              <br />
              <div className='line-title' />
              <br />
              <br />
              <br />
              <iframe
                className='map'
                title='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1334363133897!2d106.69420041537052!3d10.801090692304799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528c8ee3a91d3%3A0xe3b1f51e4340938a!2zMTAxIEzDqiBWxINuIER1eeG7h3QsIFBoxrDhu51uZyAzLCBCw6xuaCBUaOG6oW5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1645771370050!5m2!1sen!2s"
                // style={{ border: "0", width: "55vw", height: "200px" }}
                allowfullscreen=""
                loading="lazy"
              />
              <div className='contact-container'>
                <Inquiries />
                <Address />
              </div>
            </div>
          </div>
        )
        :
        (
          <div className='contact mobile' id='contact'>
            <div className='contact-view mobile'>
              <br />
              <h1 className='contact-title'>Contact</h1>
              <br />
              <div className='line-title' />
              <br />
              <br />
              <br />
              <iframe
                className='map mobile'
                title='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1334363133897!2d106.69420041537052!3d10.801090692304799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528c8ee3a91d3%3A0xe3b1f51e4340938a!2zMTAxIEzDqiBWxINuIER1eeG7h3QsIFBoxrDhu51uZyAzLCBCw6xuaCBUaOG6oW5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1645771370050!5m2!1sen!2s"
                style={{ border: "0", width: "100vh", height: "200px" }}
                allowfullscreen=""
                loading="lazy"
              />
              <div className='contact-container mobile'>
                <Inquiries />
                <Address />
              </div>
            </div>
          </div>
        )
      }
      </MediaQuery>
  )
};

export default Contact;