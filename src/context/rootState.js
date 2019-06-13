import React, { useReducer, useEffect, useState } from "react"
import {
  FETCH_SUJETS,
  LOG_IN,
  LOG_OUT,
  SEND_NEW_POST,
  FETCH_POST,
  FETCH_NOTIFICATION,
  SEND_NEW_NOTIFICATION,
  DELETE_NOTIFICATION,
  DELETE_POST
} from "../reducers/types"

import RootContext from "./root-context"
import {
  db,
  firebaseAuth,
  provider,
  serverStamp
} from "../config/firebase_config"

import { sujetReducer } from "../reducers/sujetReducer"
import { userReducer } from "../reducers/userReducer"
import { postsReducer } from "../reducers/postsReducer"
import { notificationReducer } from "../reducers/notificationReducer"

//
const RootState = props => {
  const [loading, setLoading] = useState(true)

  const [sujetState, sujetDispatch] = useReducer(sujetReducer, { sujets: [] })

  const [userState, userDispatch] = useReducer(userReducer, { user: null })

  const [postState, postDispatch] = useReducer(postsReducer, { posts: [] })

  const [notificationState, notificationDispatch] = useReducer(
    notificationReducer,
    { notifications: [] }
  )

  //
  useEffect(() => {
    const saveUser = JSON.parse(localStorage.getItem("user"))
    if (saveUser) {
      return userDispatch({
        type: LOG_IN,
        payload: saveUser
      })
    }
  }, [])

  //
  useEffect(() => {
    fetchSujets()
  }, [])

  //
  useEffect(() => {
    fetchNotifications()
  }, [])

  //
  const setVisa = visa => {
    db.collection("posts")
      .doc(visa.postId)
      .update({
        visa: true,
        remarques: visa.remarques
      })
      .then(res => {
        //console.log("visa effectuee")
      })
      .catch(error => {
        console.log(error.messsage)
      })
  }

  //
  const getPostsBySujetId = sujet_id => {
    setLoading(true)
    let lesposts = []
    const docref = db.collection("posts")
    docref
      .where("sujet_id", "==", sujet_id)
      .get()
      .then(res => {
        res.forEach(doc => {
          lesposts.push(doc.data())
        })
        //
        setLoading(false)
        return postDispatch({
          type: FETCH_POST,
          payload: lesposts
        })
      })
      .catch(error => {
        setLoading(false)
        console.log(error.messsage)
      })
  }

  //
  const sendNewNotification = post => {
    const notification = {
      sujet_id: post.sujet_id,
      post_id: post.id,
      content: post.sujet_name,
      user: `${post.firstName} ${post.lastName}`
    }

    const res = db.collection("notifications").doc()

    notification.id = res.id

    db.collection("notifications")
      .doc(res.id)
      .set(notification)
      .then(val => {
        notificationDispatch({
          type: SEND_NEW_NOTIFICATION,
          payload: notification
        })
      })
      .catch(error => {
        alert(error.messsage)
      })
  }

  //
  const deleteNotification = id => {
    db.collection("notifications")
      .doc(id)
      .delete()
      .then(res => {
        notificationDispatch({
          type: DELETE_NOTIFICATION,
          payload: id
        })
      })
      .catch(error => {
        console.error(error.messsage)
      })
  }

  //
  const deletePost = postId => {
    db.collection("posts")
      .doc(postId)
      .delete()
      .then(res => {
        postDispatch({
          type: DELETE_POST,
          payload: postId
        })
      })

      .catch(error => {
        console.error(error.messsage)
      })
  }

  //
  const sendNewPost = post => {
    const res = db.collection("posts").doc()

    post.create_at = serverStamp.serverTimestamp()
    post.id = res.id

    db.collection("posts")
      .doc(res.id)
      .set(post)
      .then(val => {
        //
        sendNewNotification(post)
        //
        postDispatch({
          type: SEND_NEW_POST,
          payload: post
        })
      })
      .catch(error => {
        console.error(error.messsage)
      })
  }

  //
  const fetchSujets = () => {
    sujetDispatch({
      type: FETCH_SUJETS,
      payload: null
    })
  }

  //
  const fetchNotifications = () => {
    notificationDispatch({
      type: FETCH_NOTIFICATION,
      payload: null
    })
  }

  //
  const logOut = () => {
    firebaseAuth.signOut().then(res => {
      console.log("deconnexion ...")
      localStorage.removeItem("user")
      return userDispatch({
        type: LOG_OUT,
        payload: null
      })
    })
  }

  //
  const logIn = () => {
    firebaseAuth.signInWithPopup(provider).then(res => {
      let zeuser = null
      if (res.user.uid) {
        zeuser = {
          id: res.user.uid,
          name: res.user.displayName,
          image: res.user.photoURL,
          isAdmin: false,
          create_at: new Date()
        }
        if (zeuser.name === "Adelino DeCarvalho") {
          zeuser.isAdmin = true
        }
        //save localstorage
        let userTxt = JSON.stringify(zeuser)
        localStorage.setItem("user", userTxt)

        //save user in db
        db.collection("users")
          .doc(res.user.uid)
          .set(zeuser)
          .then(() => {
            console.log("user create")
            return userDispatch({
              type: LOG_IN,
              payload: zeuser
            })
          })
          .catch(error => {
            console.error(error.messsage)
          })
      }
    })
  }

  return (
    <RootContext.Provider
      value={{
        loading,
        sujets: sujetState.sujets,
        fetchSujets: fetchSujets,

        user: userState.user,
        posts: postState.posts,
        notifications: notificationState.notifications,
        fetchNotifications: fetchNotifications,
        deleteNotification: deleteNotification,
        deletePost: deletePost,

        logIn: logIn,
        logOut: logOut,

        sendNewPost: sendNewPost,
        getPostsBySujetId: getPostsBySujetId,
        setVisa: setVisa
      }}
    >
      {props.children}
    </RootContext.Provider>
  )
}

export default RootState
