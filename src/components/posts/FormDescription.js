import React, { useState } from "react"

const FormDescription = props => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [descriptions, setDescriptions] = useState("")
  const [errors, setErrors] = useState("")

  const validateForm = () => {
    //first name
    if (firstName.trim() === "") {
      setErrors("Veuillez saisir votre nom de famille !")
      setFirstName("")
      return false
    }

    //last name
    if (lastName.trim() === "") {
      setErrors("Veuillez saisir votre prénom !")
      setLastName("")
      return false
    }

    //descriptions
    if (descriptions.trim() === "") {
      setErrors("Veuillez saisir une description!")
      setDescriptions("")
      return false
    }

    return true
  }

  const onPublishHandler = e => {
    if (validateForm() === true) {
      const post = {
        firstName,
        lastName,
        descriptions
      }
      props.onFormData(post)
    }
  }

  const onDeleteHandler = e => {
    setFirstName("")
    setLastName("")
    setDescriptions("")
    setErrors("")
    console.log("delete")
  }

  return (
    <div className="col s12">
      <div className="white card z-depth-1-half">
        <div className="card-content">
          <span className="card-title center grey-text darken-2">
            Décrire brièvement vos actions de la semaine.
          </span>

          <form>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="first_name"
                  type="text"
                  required
                  className="validate"
                  value={firstName}
                  onChange={e => {
                    setFirstName(e.target.value)
                  }}
                />
                <label htmlFor="first_name">Nom</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="last_name"
                  type="text"
                  required
                  className="validate"
                  value={lastName}
                  onChange={e => {
                    setLastName(e.target.value)
                  }}
                />
                <label htmlFor="last_name">Prénom</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="descriptions"
                  className="materialize-textarea validate"
                  value={descriptions}
                  required
                  onChange={e => {
                    setDescriptions(e.target.value)
                  }}
                />
                <label htmlFor="descriptions">Actions de la semaine</label>
              </div>
            </div>
          </form>
        </div>
        <div className="card-action">
          <a
            className="btn-floating waves-effect waves-light btn indigo lighten-2"
            onClick={onPublishHandler}
          >
            <i className="material-icons">publish</i>
          </a>

          <a
            className="btn-floating waves-effect waves-light  red btn"
            onClick={onDeleteHandler}
          >
            <i className="material-icons">delete</i>
          </a>
          <span className="red-text darken-4">{errors}</span>
        </div>
      </div>
    </div>
  )
}

export default FormDescription
