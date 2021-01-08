import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
// import arrow from "../Img/th.png"

function Footer() {
  return (
    <div className="mainFooter" >
      {/* <img src={arrow} alt="arrow" className="arrow" /> */}

      <p className="one"><Link to="/ola" className="link" > {"<"}</Link> </p>
      <p className="two">01</p>
      <p className="three">/02</p>
      <p className="wwww"> <Link to="/debby" className="link">{">"}</Link> </p>
      <h1 className="sam">OLORUNDA <br />SAMUEL</h1>

    </div>
  )
}

export default Footer
