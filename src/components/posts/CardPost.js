import React from "react"
import { Link } from "react-router-dom"

function getDate(val) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  }
  const date = new Date(val * 1000)
  return date.toLocaleDateString("fr-FR", options)
}

function afficheBadge(visa) {
  if (!visa) {
    return <span className="new badge red" />
  }
}

const afficheBtnEdition = (admin, post_id) => {
  if (admin) {
    return (
      <Link
        to={"/visa/" + post_id}
        className="waves-effect waves-light btn-small indigo lighten-2"
      >
        <i className="material-icons">edit</i>
      </Link>
    )
  }
}

//
const CardPost = props => {
  const { post, isAdmin, deletePostHandler } = props

  //
  return (
    <div className="col s12 m6">
      <div className="card white z-depth-2 card-post">
        <div className="card-content">
          <span className="card-title grey-text darken-2">
            <img
              className="avatar-image"
              src={post.author_image}
              alt="avatar"
            />
            {post.firstName} {post.lastName}
          </span>
          <p>{post.descriptions}</p>

          <small className="grey-text darken-1">
            Posté le {getDate(post.create_at.seconds)}
            {afficheBadge(post.visa)}
          </small>

          <hr />
          <p className="red-text">{post.remarques}</p>
        </div>
        <div className="card-action container-btn-notification">
          {afficheBtnEdition(isAdmin, post.id)}

          {isAdmin ? (
            <a
              onClick={() => {
                deletePostHandler(post.id)
              }}
              href="#"
              className="waves-effect waves-light btn-small red lighten-2"
            >
              <i className="material-icons">delete</i>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default CardPost
