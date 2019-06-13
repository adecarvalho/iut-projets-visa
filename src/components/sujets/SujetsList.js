import React from "react"
import CardSujet from "./CardSujet"

const SujetsList = props => {
  const { sujets } = props

  return (
    <div className="row">
      {sujets &&
        sujets.map(sujet => {
          return (
            <CardSujet
              key={sujet.id}
              id={sujet.id}
              name={sujet.name}
              description={sujet.description}
            />
          )
        })}
    </div>
  )
}

export default SujetsList
