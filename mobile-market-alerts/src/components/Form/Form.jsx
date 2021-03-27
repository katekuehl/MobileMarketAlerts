//import ReactDOM from 'react-dom';
import React, { Component} from 'react';
import './Form.css';

class Form extends Component {

  testFunction(e) {
    alert('Your preferences were submitted successfully! You will be receiving a text message shortly.');
    console.log('it works!');  
  }

  constructor(props){
    super(props)
    this.state = {
      farmersMarket: false,
      freeMeals: false,
      foodShelves: false,
      phone: null,
      zipCode: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let arr = [];
    for (var key in this.state) {
      if(this.state[key]) {
        arr.push(key);
      }
    }
    let checkData = {
      check_test: arr.toString()
    };

    console.log(checkData)

    const data = new FormData(event.target);
    console.log(data)
    //console.log(data.getAll('title'))
    fetch('http://127.0.0.1:5000/api', {
      method: 'POST',
      body: data
    });
  };

  handleInputChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    if(event.target.type === "checkbox")
      this.setState({[event.target.name] : event.target.checked});
    else
      this.setState({[event.target.name] : event.target.value});
  }

  render() {
    const {farmersMarket, freeMeals, foodShelves, phone, zipCode} = this.state
    return (
        <form onSubmit={this.handleSubmit} class="form" id="form" method="POST">
          <div class="container">
            <h3>Sign Up Here</h3>
            <p>Farmers market is: {farmersMarket ? "yes" : "no"}</p>
            <p>Free meals is: {freeMeals ? "yes" : "no"}</p>
            <p>Food shelves is: {foodShelves ? "yes" : "no"}</p>
            <p>Phone number is: {phone ? "content entered" : "not set"}</p>
            <p>Zip code is {zipCode ? "content entered" : "not set"}</p>
          </div>
          <div class="container text-input phone">
            <label for="phone">Cell Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="xxx-xxx-xxxx" onChange={this.handleInputChange}></input>
          </div>
          <div class="container text-input location">
            <label for="location">Zip Code</label>
            <input type="text" id="location" name="zipCode" onChange={this.handleInputChange}></input>
          </div>
          <div class="container check-label check-location">
            <label>Check All That Apply:</label>
          </div>
          <div class="container checkbox-box">
            <input type="checkbox" class="checkbox-input" name="farmersMarket" value="1" checked={farmersMarket} onChange={this.handleInputChange}></input>
            <label for="farmers-market">Farmers Market</label>
          </div>
          <div class="container checkbox-box">
            <input type="checkbox" class="checkbox-input" name="freeMeals" value="2" checked={freeMeals} onChange={this.handleInputChange}></input>
            <label for="free-meals">Free Meals</label>
          </div>
          <div class="container checkbox-box">
            <input type="checkbox" class="checkbox-input" name="foodShelves" value="3" checked={foodShelves} onChange={this.handleInputChange}></input>
            <label for="food-shelves">Food Shelves</label>
          </div>
            <div class="container submit-button">
            <input type="submit" name="submit" value="submit" onClick={ this.testFunction }></input>
          </div>
        </form>

    )
  }
}
//ReactDOM.render(document.getElementById('form'));
export default Form;

