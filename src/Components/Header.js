import React from 'react'
import Body from './Body/Body'
import "./HeaderStyle.css"
import circle from "./Img/cir.png"

function Header() {
  return (
    <div className="parentContainer" >
      <button className="donateButton">Donate</button>
      <p className="headerText">CODELAB</p>
      <div className="parentContainerWrapper">
        <div className="centerCircle">
          <img src={circle} alt="A Blue Circle" />
        </div>
      </div>
      <Body />


    </div>
  )
}

export default Header
