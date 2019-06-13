import React from "react"
import puzzle from "../../images/puzzle.png"
import { Link } from "react-router-dom"

const CardSujet = ({ id, name, description }) => {
  return (
    <div className="col s12 m5 offset-m1">
      <div className="card card-sujet  white z-depth-2">
        <div className="card-image">
          <img src={puzzle} alt="deco" />
        </div>
        <div>
          <span className=" sujet-titre grey-text  text-darken-4">{name}</span>
        </div>
        <div className="card-content">
          <p>{description}</p>
        </div>
        <div className="card-action">
          <Link to={"/posts/" + id} className="btn indigo lighten-1">
            Ouvrir
          </Link>
        </div>
      </div>
    </div>
  )
}
export default CardSujet
