import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import Avatar from "./Avatar"
import RootContext from "../context/root-context"

const NavBar = props => {
  const context = useContext(RootContext)

  const { user, logIn, logOut } = context

  const connectGoogleHandler = e => {
    //console.log("connexion", context)
    logIn()
  }

  const logOutHandler = e => {
    //.log("deconnexion", context)
    logOut()
  }

  return (
    <nav>
      <div className="nav-wrapper indigo darken-3">
        <NavLink to="/" className="brand-logo left">
          <i className="large material-icons">home</i>
        </NavLink>

        <ul id="nav-mobile" className="right">
          <li>
            {!user ? (
              <a onClick={connectGoogleHandler}>Connexion</a>
            ) : (
              <a onClick={logOutHandler}>Deconnexion</a>
            )}
          </li>
          <li>
            <NavLink to="/sujets">Sujets</NavLink>
          </li>
          <li>{user ? <Avatar user={user} /> : null}</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
