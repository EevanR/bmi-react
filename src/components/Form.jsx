import React from "react";

const Form = props => {
  
  return (
    <div className="ui form">
      <form onSubmit={props.onSubmitHandler}>
        <div className="fields">
          <div className="field">
            <label htmlFor="weight">Weight</label>
            <input
              type="number"
              required
              placeholder="kgs(metric)/lbs(imp)"
              value={props.weight}
              name="weight"
              id="weight"
              onChange={props.onChangeHandler}
            />
          </div>
          <div className="field">
            <label htmlFor="height">Height</label>
            <input
              type="number"
              required
              placeholder="cm(metric)/inch(imp)"
              value={props.height}
              name="height"
              id="height"
              onChange={props.onChangeHandler}
            />
          </div>
        </div>
        <button id='calculate'>Calculate Metric BMI</button>
        <button onClick={props.handleAlternate.bind(this)} id='calculateImp'>Calculate Imperial BMI</button>
      </form>
    </div>
  );
};

export default Form;