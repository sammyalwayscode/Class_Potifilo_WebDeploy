import React from 'react'
import "../HeaderStyle.css"
import circle from "../Img/cir.png"

import "../Body/Body.css"
import ola from "../Img/ola.png"
// import Footer from '../Footer/Footer'

import { Link } from 'react-router-dom'
import "../Footer/Footer.css"

function Ola() {
  return (
    <div>
      <div className="parentContainer" >
        <button className="donateButton">Donate</button>
        <p className="headerText">CODELAB</p>
        <div className="parentContainerWrapper">
          <div className="centerCircle">
            <img src={circle} alt="A Blue Circle" />
          </div>
        </div>
        <div className="bodyContainer">
          <h3 className="quote">THE WORLD<br /> WILL SEE HIM</h3>
          <img src={ola} alt="A Yello Man" className="mainImage" />
          <h1 className="four">400</h1>
          <h3 className="code">WHEN HE CODE</h3>

          <div className="mainFooter" >
            <p className="one"><Link to="/debby" className="link" > {"<"}</Link> </p>
            <p className="two">03</p>
            <p className="three">/01</p>
            <p className="wwww"> <Link to="/" className="link">{">"}</Link> </p>
            <h1 className="sam">ABUBAKA <br />OLAMILEKAN</h1>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Ola
