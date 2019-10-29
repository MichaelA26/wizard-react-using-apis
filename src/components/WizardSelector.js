import React from "react";
import WizardCard from "./WizardCard.js";

const WizardSelector = ({ data }) => {

  const wizardNodes = data.map((wizard, index) => {
    const {name, house, image} = wizard;
    return (
      <WizardCard name={name} house={house} image={image} key={index}/>
    )
  })

  return (
    <div className="wizard-selector">
    {wizardNodes}
    </div>
  )
}

export default WizardSelector;
