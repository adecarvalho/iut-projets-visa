import React, { useContext } from "react"
import RootContext from "../context/root-context"
import { Link } from "react-router-dom"

const NotificationInfo = props => {
  const context = useContext(RootContext)

  const deleteHandler = id => {
    context.deleteNotification(id)
  }

  return (
    <div className="card z-depth-1">
      <div className="card-content">
        <span className="card-title center indigo-text">Notifications</span>
        <ul className="online-user">
          {context.notifications &&
            context.notifications.map((item, index) => {
              return (
                <li key={item.id} className="collection-item">
                  <div>
                    <span>{item.user}</span>
                  </div>
                  <div>
                    <span>{item.content}</span>
                  </div>
                  <div className="container-btn-notification">
                    {context.user && context.user.isAdmin ? (
                      <Link
                        to={"/posts/" + item.sujet_id}
                        className="waves-effect waves-light btn-small indigo lighten-2"
                      >
                        <i className="material-icons">folder_open</i>
                      </Link>
                    ) : null}

                    {context.user && context.user.isAdmin ? (
                      <a
                        onClick={() => deleteHandler(item.id)}
                        className="waves-effect waves-light btn-small red lighten-2"
                      >
                        <i className="material-icons">delete</i>
                      </a>
                    ) : null}
                  </div>

                  <hr />
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default NotificationInfo
