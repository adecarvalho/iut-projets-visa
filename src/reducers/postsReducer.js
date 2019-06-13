//import { db } from "../config/firebase_config"
import { SEND_NEW_POST, FETCH_POST, DELETE_POST } from "./types"

//
export const postsReducer = (state, action) => {
  switch (action.type) {
    //
    case SEND_NEW_POST:
      const newpost = action.payload
      return { ...state, posts: [...state.posts, newpost] }

    //
    case FETCH_POST:
      const lesposts = action.payload
      return { posts: lesposts }

    //
    case DELETE_POST:
      const zeid = action.payload
      const res = state.posts.filter(item => {
        return item.id !== zeid
      })

      return { ...state, posts: res }

    //
    default:
      return state
  }
}
