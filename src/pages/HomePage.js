import React from "react"

import ConnexionInfo from "../components/ConnexionInfo"
import NotificationInfo from "../notifications/NotificationInfo"

const HomePage = props => {
  return (
    <div className="fluid">
      <div className="row">
        <div className="col s12 m7">
          <ConnexionInfo />
        </div>
        <div className="col s12 m4 offset-m1">
          <NotificationInfo />
        </div>
      </div>
    </div>
  )
}

export default HomePage
