import React, { Component } from 'react'
import "./Navbar.css"

import {
    Link
  } from "react-router-dom";

export class Navbar extends Component {

  render() {
    return (
        <>
            <div className='navigation' style={{backgroundColor:"#242526"}}>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/" style={{fontSize:"2.5rem", color:"#fff"}}>Times Of Nation</Link> 
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg mx-4" style={{backgroundColor:"#242526"}}>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link"  style={{color:"aliceblue"}} to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link"  style={{color:"aliceblue"}} to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link"  style={{color:"aliceblue"}} to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" style={{color:"aliceblue"}} to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" style={{color:"aliceblue"}} to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" style={{color:"aliceblue"}} to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" style={{color:"aliceblue"}} to="/technology">Technology</Link>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
        </>
    )
  }
}

export default Navbar