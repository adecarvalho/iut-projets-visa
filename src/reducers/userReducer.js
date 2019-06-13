import { LOG_IN, LOG_OUT } from "./types"

export const userReducer = (state, action) => {
  switch (action.type) {
    //
    case LOG_IN:
      const zeuser = action.payload
      return { ...state, user: zeuser }

    //
    case LOG_OUT:
      return { ...state, user: null }

    default:
      return state
  }
}
