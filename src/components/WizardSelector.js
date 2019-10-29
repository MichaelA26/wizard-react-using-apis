import React from "react";
import WizardCard from "./WizardCard.js";

const WizardSelector = ({ data }) => {

  const wizardNodes = data.map(wizard => {
    const {name, house, image, id} = wizard;
    return (
      <WizardCard name={name} house={house} image={image} key={id}/>
    )
  })

  return (
    <div className="wizard-selector">
    {wizardNodes}
    </div>
  )
}

export default WizardSelector;
