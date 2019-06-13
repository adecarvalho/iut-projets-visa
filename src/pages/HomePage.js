import React from "react"
//import React, { useContext, useEffect } from "react"
import ConnexionInfo from "../components/ConnexionInfo"
import NotificationInfo from "../notifications/NotificationInfo"

//import RootContext from "../context/root-context"

const HomePage = props => {
  //const context = useContext(RootContext)

  /*  useEffect(() => {
    //context.fetchSujets()
  }, []) */

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
