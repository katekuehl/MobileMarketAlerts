import React, { Component} from 'react';
import './HowThisWorks.css';
import alert from '../../images/alert.png';
import food from '../../images/food.png';
import phoneform from '../../images/form.png';


class HowThisWorks extends Component {
  render() {
    return (
        <div class="works">
            <h3>How This Works</h3>
          <div class="flex-container">
            <div class="box box-1">
            <img src={phoneform} class="icon phone-form" alt="sign up form"/>
              <p>Fill out the signup form</p>
            </div>
            <div class="box box-2">
            <img src={food} class="icon food" alt="box of food"/>
            <p>Select your preferences</p>
            </div>
            <div class="box box-3">
              <img src={alert} class="icon alert" alt="alert on phone"/>
              <p>Receive texts for food near you</p>
            </div>
          </div>
        </div>
 
    )
  }
}

export default HowThisWorks;
