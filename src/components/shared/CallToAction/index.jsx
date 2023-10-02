import React from 'react';
import "./style.scss";
import { BsArrowRightShort } from "react-icons/bs";

const CallToAction = ({text}) => {
  return <div className="call-to-action">
    <span className="text">{text}</span>
    <span className="arrow-icon"><BsArrowRightShort/></span>
  </div>
}

export default CallToAction