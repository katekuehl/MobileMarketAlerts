import React, { Component} from 'react';
import './Form.css';


class Form extends Component {
  render() {
    return (
        <form>
          <h3>Sign Up Here</h3>
          <br></br>
          <label for="phone">Cell Phone Number</label>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
          <br></br>
          <label for="location">Location</label>
          <input type="text" id="location" name="location"></input>
          <br/>
          <h4>Check All That Apply:</h4>
          <input type="checkbox" id="farmersmarket" name="farmersmarket" value="Farmers Market"></input>
          <label for="farmersmarket">Farmers Market</label>
          <br/>
          <input type="checkbox" id="freemeals" name="freemeals" value="Free Meals"></input>
          <label for="freemeals">Free Meals</label>
          <br/>
          <input type="checkbox" id="foodshelves" name="foodshelves" value="Food Shelves"></input>
          <label for="foodshelves">Food Shelves</label>
          <br/>
          <input type="submit" name="submit" value="submit"></input>
        </form>
        
    )
  }
}

export default Form;
