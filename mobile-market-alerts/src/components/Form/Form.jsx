//import ReactDOM from 'react-dom';
import React, { Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      phone: null
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
  }

  handleInputChange = () => {

  }

  render() {
    const {phone} = this.state
    return (
<<<<<<< HEAD
        <form onSubmit={this.handleSubmit} class="form" id="form" action="http://localhost:5000/" method="POST">
=======
        <form class="form" id="form">
>>>>>>> 8f774c9cd8c9ff1d2622f831797a115cb2beaa77
          <div class="container">
            <h3>Sign Up Here</h3>
            <p>Phone number is: {phone}</p>

          </div>
          <div class="container text-input phone">
            <label for="phone">Cell Phone Number</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
          </div>
          <div class="container text-input location">
            <label for="location">Location</label>
            <input type="text" id="location" name="location"></input>
          </div>
          <div class="container check-label check-location">
            <label>Check All That Apply:</label>
          </div>
          <div class="container checkbox-box">
            <input type="checkbox" class="checkbox-input" name="farmers-market" value="farmers-market"></input>
            <label for="farmers-market">Farmers Market</label>
          </div>
          <div class="container checkbox-box">
            <input type="checkbox" class="checkbox-input" name="free-meals" value="free-meals"></input>
            <label for="free-meals">Free Meals</label>
          </div>
          <div class="container checkbox-box">
            <input type="checkbox" class="checkbox-input" name="food-shelves" value="food-shelves"></input>
            <label for="food-shelves">Food Shelves</label>
          </div>
            <div class="container submit-button">
            <input type="submit" name="submit" value="submit"></input>
          </div>
        </form>
        
    )
  }
}
//ReactDOM.render(document.getElementById('form'));
export default Form;

