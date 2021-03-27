import React, { Component} from 'react';
import './Banner.css';
import background from '../../cover.png';

class Banner extends Component {
  render() {
    return (
      <div className="background" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${background})` }}>
        <div class="banner-text">
          <h1>Mobile Market Alerts</h1>
          <p className="tagline">feeding neighbors by connecting communities</p>
          <p className="button">Get Alerts</p>
          </div>
      </div>
    )
  }
}

export default Banner;
