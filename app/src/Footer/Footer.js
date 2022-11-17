import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <footer id="footer" className='footer'>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='flex-fontainer'>
              <div className='flex-item'>
                <h1 className='footer-title'><a href='#'>React Exchange</a></h1>
              </div>
              <div className='flex-item'>
                <div className='module-body'>
                  <ul className='list-unstyled'>
                    <li><a href='/sitemap/' tooltip="site map">Site Map</a></li>
                    <li><a href='/sitemap/' target="_blank" tooltip="google sitemap">Google SiteMap</a></li>
                  </ul>
                </div>
              </div>
              <div className='flex-item'>
                <div className='module-body'>
                  <ul className='list-unstyled'>
                    <li><a href='/contact/' tooltip="contacts">Contacts</a></li>
                    <li><a href='/d/'>Insurance</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
