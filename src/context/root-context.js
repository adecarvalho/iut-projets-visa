import { createContext } from "react"

export default createContext({
  loading: false,
  sujets: [],
  user: null,
  notifications: [],

  fetchSujets: () => {},
  logIn: () => {},
  logOut: () => {},

  sendNewPost: post => {},
  getPostsBySujetId: sujetId => {},
  deletePost: postId => {},

  setVisa: visa => {},
  fetchNotifications: () => {},
  deleteNotification: id => {}
})
