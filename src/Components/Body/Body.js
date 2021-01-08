import React from 'react'
import "./Body.css"
import pix from "../Img/pepe.png"
import Footer from '../Footer/Footer'

function Body() {
  return (
    <div className="bodyContainer">
      <h3 className="quote">THE WORLD<br /> WILL SEE ME</h3>
      <img src={pix} alt="A Yello Man" className="mainImage" />
      <h1 className="four">400</h1>
      <h3 className="code">WHEN I CODE</h3>

      <Footer />
    </div>
  )
}

export default Body
