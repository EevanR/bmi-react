import React from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <form>
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          required
          placeholder="Weight in kgs"
          name="weight"
          id="weight"
        />
        <label htmlFor="height">Height</label>
        <input
          type="number"
          required
          placeholder="Height in cm"
          name="height"
          id="height"
        />
        <button>Calculate BMI</button>
      </form>
    )
  }
}

export default App;