import React, { useState, useEffect, useContext } from "react"
import CardDescription from "../components/posts/CardDescription"
import RootContext from "../context/root-context"
import PostsList from "../components/posts/PostsList"
import { Redirect } from "react-router-dom"

const afficheBar = val => {
  if (val)
    return (
      <div className="progress">
        <div className="indeterminate indigo" />
      </div>
    )
  else return
}

const PostsPage = props => {
  const [sujet, setSujet] = useState(null)

  const id = props.match.params.id

  const context = useContext(RootContext)

  const GetSujetById = id => {
    if (context.sujets) {
      const sujetTab = context.sujets.filter(item => {
        return item.id === id
      })

      setSujet(sujetTab[0])
    }
  }

  useEffect(() => {
    GetSujetById(id)
  }, [])

  useEffect(() => {
    context.getPostsBySujetId(id)
  }, [])

  const newPostHander = datas => {
    if (datas) {
      const postToSend = {
        ...datas,
        author_id: context.user.id,
        author_image: context.user.image,
        visa: false,
        remarques: ""
      }
      context.sendNewPost(postToSend)
    }
  }

  const deletePostHandler = postId => {
    context.deletePost(postId)
  }

  return !context.user ? (
    <Redirect to="/" />
  ) : (
    <div className="container">
      <div className="row">
        <div className="col s12">{afficheBar(context.loading)}</div>
      </div>

      <div className="row">
        <div className="col s12">
          <CardDescription sujet={sujet} newPostHander={newPostHander} />
        </div>
      </div>

      <div className="row">
        <div className="">
          <PostsList
            user={context.user}
            posts={context.posts}
            deletePostHandler={deletePostHandler}
          />
        </div>
      </div>
    </div>
  )
}
export default PostsPage
