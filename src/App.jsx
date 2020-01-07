import React, { Component } from 'react';
import Form from "./components/Form";
import Message from "./components/Message";
import { calculateBmi, imperialBmi } from "./helper/bmiHelper";
// import './App.css';

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };
  
  handleAlternate = e => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = imperialBmi(
      this.state.weight,
      this.state.height
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };

  render() {
    return (
    <div>
      <Form 
        weight={this.state.weight}
        height={this.state.height}
        onChangeHandler={this.onChangeHandler}
        onSubmitHandler={this.onSubmitHandler}
        handleAlternate={this.handleAlternate}
      />
      {this.state.bmiValue && (
        <Message
          bmiValue={this.state.bmiValue}
          bmiMessage={this.state.bmiMessage}
        />
      )}
    </div>
    )
  }
}

export default App;