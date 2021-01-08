import React from 'react'
// import Header from '../Header'
// import Body from '../Body/Body'
import "../HeaderStyle.css"
import circle from "../Img/cir.png"

import "../Body/Body.css"
import pixx from "../Img/debby.png"
// import Footer from '../Footer/Footer'

import { Link } from 'react-router-dom'
import "../Footer/Footer.css"



function Debby() {
  return (
    <div>
      <div className="parentContainer" >
        <button className="donateButton">Donate</button>
        <p className="headerText">{"<SHE CODES/>"}</p>
        <div className="parentContainerWrapper">
          <div className="centerCircle">
            <img src={circle} alt="A Blue Circle" />
          </div>
        </div>
        <div className="bodyContainer">
          <h3 className="quote">THE WORLD<br /> WILL SEE HER</h3>
          <img src={pixx} alt="A Yello Man" className="mainImage" />
          <h1 className="four">400</h1>
          <h3 className="code">WHEN SHE CODE</h3>

          <div className="mainFooter" >
            <p className="one"><Link to="/" className="link" > {"<"}</Link> </p>
            <p className="two">02</p>
            <p className="three">/03</p>
            <p className="wwww"> <Link to="/ola" className="link">{">"}</Link> </p>
            <h1 className="sam">ATIBI <br />DEBORA</h1>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Debby
