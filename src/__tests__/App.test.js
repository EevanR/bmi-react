import React from "react";
import { mount } from "enzyme";
import App from "../App";

describe("App component", () => {
  const describedComponent = mount(<App />);
  it("Counts using the metric method", () => {
    describedComponent
      .find("#weight")
      .simulate("change", { target: { name: "weight", value: "90" } });
    describedComponent
      .find("#height")
      .simulate("change", { target: { name: "height", value: "190" } });
    describedComponent.find("form").simulate("submit");
    expect(describedComponent.find("#bmi-message").text()).toEqual(
      "You are Normal with a BMI of 24.93"
    );
  });

  it("Counts using the imperial method", () => {
    describedComponent
      .find("#weight")
      .simulate("change", { target: { name: "weight", value: "192" } });
    describedComponent
      .find("#height")
      .simulate("change", { target: { name: "height", value: "74" } });
    describedComponent.find("#calculateImp").simulate("click");
    expect(describedComponent.find("#bmi-message").text()).toEqual(
      "You are Normal with a BMI of 24.65"
    );
  });
});