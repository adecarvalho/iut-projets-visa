import React from "react"

const Avatar = props => {
  return props.user ? (
    <div className="avatar-layout">
      <div>
        <img className="avatar-image" src={props.user.image} alt="avatar" />
      </div>
      <div className="avatar-name">
        <span>{props.user.name}</span>
      </div>
    </div>
  ) : null
}

export default Avatar
