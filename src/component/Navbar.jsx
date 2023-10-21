import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode } bg-${props.mode}`}>
    <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>

        <div className={`form-check form-switch text-${props.mode === 'light'? "dark" : 'light'}`}>
          <input className="form-check-input mx-2" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault"> Enable DarkMode </label>
        </div>
    </div>
  </nav>
    
  )
}

// agr hume string m hi chaiye to hum yha bta skgte h aur koi value ye nh lega
Navbar.Proptype = {title: PropTypes.string, home: PropTypes.string.isRequired }

// defualt k liye:
Navbar.defaultProps = {
    title: 'Hello'
}



export default Navbar
