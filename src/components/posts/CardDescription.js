import React, { useState } from "react"
import FormDescription from "./FormDescription"

const CardDescription = props => {
  const [toggle, setToggle] = useState(false)

  const onToggleHandler = e => {
    setToggle(!toggle)
  }

  const onFormData = datas => {
    if (datas) {
      const newpost = {
        ...datas,
        sujet_name: props.sujet.name,
        sujet_id: props.sujet.id
      }
      props.newPostHander(newpost)
      setToggle(false)
    }
  }

  const containt = (
    <div>
      <div className="row center grey-text darken-2">
        <h4>
          {props.sujet ? (
            <span>{`Projet ${props.sujet.name}`}</span>
          ) : (
            <span>Projet</span>
          )}

          <a
            className="btn-floating btn-large waves-effect waves-light indigo lighten-2"
            onClick={onToggleHandler}
          >
            <i className="material-icons">edit</i>
          </a>
        </h4>
      </div>

      <div className="row">
        {toggle ? <FormDescription onFormData={onFormData} /> : null}
      </div>
    </div>
  )

  return containt
}

export default CardDescription
