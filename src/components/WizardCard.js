import React from "react";

const WizardCard = ({ name, house, image }) => {
  return (
    <div>
    <h4>{name}</h4>
    <h5>{house}</h5>
    <img src={image} />
    </div>
  )
}

export default WizardCard;
