import React, { Component } from "react";
import WizardSelector from "../components/WizardSelector";

class MagicBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          "id": 1,
          "name": "Lord Voldemort",
          "house": "Slytherin",
          "image": "http://hp-api.herokuapp.com/images/voldemort.jpg"
        },
        {
          "id": 2,
          "name": "Horace Slughorn",
          "house": "Slytherin",
          "image": "http://hp-api.herokuapp.com/images/slughorn.JPG"
        }
      ]
    };
  }

  render() {
    return (
      <div className="magic-box">
      <h2>WIZARD SELECTOR YO</h2>
      <WizardSelector data={this.state.data}/>
      </div>
    )
  }

}

export default MagicBox;
