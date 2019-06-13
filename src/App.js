import React from "react"
import RootState from "./context/rootState"
import Routes from "./routes/Route"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

const App = props => {
  return (
    <React.Fragment>
      <RootState>
        <NavBar />
        <main id="app">
          <Routes />
        </main>
        <Footer />
      </RootState>
    </React.Fragment>
  )
}

export default App
