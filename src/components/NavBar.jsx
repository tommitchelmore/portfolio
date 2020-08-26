import React, { useEffect, useState } from "react"
import {Link} from "gatsby"

const NavBar = ({siteLocation}) => {
  const [navState, setNavState] = useState(0)
  const [mobileNavState, setMobileNavState] = useState(false)

  const handleScroll = (event) => {
    if (event.target.documentElement.scrollTop > 300) {
      setNavState(1)
    } else {
      setNavState(0)
    }
  }

  const toggleMobile = () => {
    setMobileNavState(!mobileNavState)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  const NavLink = ({ children, location, to }) => (
    <li className={`nav-item ${location === siteLocation ? "active" : ""}`}><Link to={to}>{children}</Link></li>
  )

  return (
    <div>
      <nav id="nav" className={navState === 1 ? 'alt' : ''}>
        <div className="nav-brand"><Link to="/">Tom Mitchelmore</Link></div>
        <div className="nav-links d-none d-lg-block">
          <ul>
            <NavLink location={"index"} to={"/"}>Home</NavLink>
            <NavLink location={"about"} to={"/#about"}>About</NavLink>
            <NavLink location={"portfolio"} to={"/portfolio"}>Portfolio</NavLink>
            <NavLink location={"contact"} to={"/#contact"}>Contact</NavLink>
          </ul>
        </div>
        <div className="nav-collapse d-lg-none" onClick={() => toggleMobile()} style={{height: '48px !important'}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px" style={{cursor: 'pointer'}}>
            <path xmlns="http://www.w3.org/2000/svg" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </div>
      </nav>
      <div className="nav-mobile d-block d-lg-none">
        <div className="nav-links">
        </div>
      </div>
    </div>
  )
}

export default NavBar
