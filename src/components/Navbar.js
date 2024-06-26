import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        
      </ul>
      <div className='d-flex'>
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px', cursor: 'pointer'}}/>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px', cursor: 'pointer'}}/>
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px', width:'30px', cursor: 'pointer'}}/>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px', cursor: 'pointer'}}/>


      </div>
      
      <div className={`form-check form-switch text-${props.mode === "dark" ? 'light' : 'dark'} `}>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
  {props.mode === "dark" ? 'Dark-mode : ON' :  'Dark-mode : OFF'}
  </label>
  {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/> */}
  
</div>
      {/* <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input class="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault"/>
      <label class="form-check-label" htmFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
</div> */}
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes={
  title: PropTypes.string,
  aboutText: PropTypes.string
}
// default prop
Navbar.defaultProps={
  title:'set title here',
  aboutText: 'About'
}