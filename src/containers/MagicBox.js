import React, { Component } from "react";
import WizardSelector from "../components/WizardSelector";

class MagicBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }



  componentDidMount(){
    fetch(`http://hp-api.herokuapp.com/api/characters`)
      .then(result => result.json())
      .then(resultfun => this.setState({data: resultfun}))
    }


    render() {
      return (
        <div className="magic-box">
        <h2>Lord Voldemort's Barmy Army</h2>
        <WizardSelector data={this.state.data}/>
        </div>
      )
    }

  }

  export default MagicBox;
