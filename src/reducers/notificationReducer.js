import { db } from "../config/firebase_config"
import {
  FETCH_NOTIFICATION,
  SEND_NEW_NOTIFICATION,
  DELETE_NOTIFICATION
} from "./types"

const getNotifications = state => {
  let val = []

  const docref = db.collection("notifications")

  docref
    .orderBy("content")
    .get()
    .then(res => {
      res.forEach(doc => {
        val.push(doc.data())
      })
    })
  return { ...state, notifications: val }
}

//
export const notificationReducer = (state, action) => {
  switch (action.type) {
    //
    case FETCH_NOTIFICATION:
      return getNotifications()

    //
    case SEND_NEW_NOTIFICATION:
      return state

    //
    case DELETE_NOTIFICATION:
      const zeid = action.payload

      const res = state.notifications.filter(item => {
        return item.id !== zeid
      })

      return { notifications: res }
    //
    default:
      return state
  }
}
