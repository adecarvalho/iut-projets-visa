import { db } from "../config/firebase_config"
import { FETCH_SUJETS } from "./types"

const getSujets = state => {
  let val = []

  const docref = db.collection("sujets")

  docref
    .orderBy("name")
    .get()
    .then(res => {
      res.forEach(doc => {
        val.push(doc.data())
      })
    })
  return { ...state, sujets: val }
}

//
export const sujetReducer = (state, action) => {
  switch (action.type) {
    //
    case FETCH_SUJETS:
      return getSujets(state)
    //
    default:
      return state
  }
}
