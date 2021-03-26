import React, { Component} from 'react';
import './Form.css';


class Form extends Component {
  render() {
    return (
        <form class="form">
          <div class="container">
            <h3>Sign Up Here</h3>
          </div>
          <div class="container text-input">
            <label for="phone">Cell Phone Number</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
          </div>
          <div class="container text-input">
            <label for="location">Location</label>
            <input type="text" id="location" name="location"></input>
          </div>
          <div class="container check-label">
            <label>Check All That Apply:</label>
          </div>
          <div class="container checkbox-box">
            <input type="checkbox" class="checkbox-input" name="farmersmarket" value="Farmers Market"></input>
            <label for="farmersmarket">Farmers Market</label>
          </div>
          <div class="container">
            <input type="checkbox" class="checkbox-input" name="freemeals" value="Free Meals"></input>
            <label for="freemeals">Free Meals</label>
          </div>
          <div class="container">
            <input type="checkbox" class="checkbox-input" name="foodshelves" value="Food Shelves"></input>
            <label for="foodshelves">Food Shelves</label>
          </div>
            <div class="container">
            <input type="submit" name="submit" value="submit"></input>
          </div>
        </form>
        
    )
  }
}

export default Form;
