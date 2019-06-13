import React, { useContext } from "react"

import { Redirect } from "react-router-dom"
import RootContext from "../context/root-context"
import SujetsList from "../components/sujets/SujetsList"

//
const SujetsPage = props => {
  const context = useContext(RootContext)

  return !context.user ? (
    <Redirect to="/" />
  ) : (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <SujetsList sujets={context.sujets} />
        </div>
      </div>
    </div>
  )
}

export default SujetsPage
