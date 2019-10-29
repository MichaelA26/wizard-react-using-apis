import React from "react";
import WizardCard from "./WizardCard.js";

const WizardSelector = ({ data }) => {

  const wizardNodes = data.map((wizard, index) => {
    const {name, house, image} = wizard;
    return (
      <WizardCard name={name} house={house} image={image} key={index}/>
    )
  })


  const wizardOptions = data.map((wizard, index) => {
    const {name} = wizard;
    return (
      <option value={name}>{name}</option>
    )
  })



  return (
    <div className="wizard-selector">
    <select>{wizardOptions}</select>
    {wizardNodes}
    </div>
  )
}

export default WizardSelector;
