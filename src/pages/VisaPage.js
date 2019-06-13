import React, { useState, useContext } from "react"
import RootContext from "../context/root-context"

//
const VisaPage = props => {
  const postId = props.match.params.id

  const context = useContext(RootContext)

  const [remarques, setRemarques] = useState("")

  const onPublishHandler = e => {
    const visa = {
      postId,
      remarques
    }
    context.setVisa(visa)
    props.history.push("/sujets")
    //
  }

  //
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="white card z-depth-1">
            <div className="card-content">
              <span className="card-title center grey-text darken-2">
                Post Id: {postId}
              </span>

              <form>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">mode_edit</i>
                    <textarea
                      id="remarques"
                      value={remarques}
                      className="materialize-textarea validate"
                      required
                      onChange={e => {
                        setRemarques(e.target.value)
                      }}
                    />
                    <label htmlFor="remarques">Remarques</label>
                  </div>
                </div>
              </form>
            </div>

            <div className="card-action">
              <a
                className="btn-floating waves-effect waves-light btn indigo lighten-1"
                onClick={onPublishHandler}
              >
                <i className="material-icons">publish</i>
              </a>

              <a
                className="btn-floating waves-effect waves-light red btn"
                onClick={e => {
                  setRemarques("")
                }}
              >
                <i className="material-icons">delete</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisaPage
