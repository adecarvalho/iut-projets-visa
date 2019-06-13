import React from "react"
import CardPost from "./CardPost"

const PostsList = props => {
  const { posts, user, deletePostHandler } = props

  return (
    <div className="row">
      {posts &&
        user &&
        posts.map((item, index) => {
          return (
            <CardPost
              key={item.id}
              isAdmin={user.isAdmin}
              post={item}
              deletePostHandler={deletePostHandler}
            />
          )
        })}
    </div>
  )
}

export default PostsList
