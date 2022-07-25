import React, { Component } from 'react'
import "./Navbar.css"

export class Navbar extends Component {

  render() {
    return (
        <>
            <div className='navigation' style={{backgroundColor:"#242526"}}>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/" style={{fontSize:"2.5rem", color:yield"#fff"}}>Times Of Nation</a> 
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg mx-4" style={{backgroundColor:"#242526"}}>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link"  style={{color:"aliceblue"}} href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link"  style={{color:"aliceblue"}} href="/buisness">Buisness</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link"  style={{color:"aliceblue"}} href="/entertainment">Entertainment</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link"  style={{color:"aliceblue"}} href="/general">General</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" style={{color:"aliceblue"}} href="/health">Health</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" style={{color:"aliceblue"}} href="/science">Science</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" style={{color:"aliceblue"}} href="/sports">Sports</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" style={{color:"aliceblue"}} href="/technology">Technology</a>
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