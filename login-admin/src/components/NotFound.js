import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/directory/Header';

const NotFound = () => (
  <div data-testid="notfound">
    <Header />
    <div className="not-found">
      <img
        src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
        alt="not-found"
        style={{ width: '50%', margin: '0 auto'}}
      />

      <div>
        <Link to="/" className="link-home"
          style={{textAlign:'center'}}>
          Go Home
        </Link>
      </div>
    </div>

  </div>
);

export default NotFound;