import React, { Component} from 'react';
import './Banner.css';
import background from '../../cover.png';

class Banner extends Component {
  render() {
    return (
      <div className="background" style={{ backgroundImage: `url(${background})` }}>
        <h1>Mobile Market Alerts</h1>
        <p>feeding neighbors by connecting communities</p>
        <p className="button">Get Alerts</p>
      </div>
    )
  }
}

export default Banner;
