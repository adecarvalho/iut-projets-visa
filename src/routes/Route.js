import React from "react"
import { Route, Switch } from "react-router-dom"

import HomePage from "../pages/HomePage"
import SujetsPage from "../pages/SujetsPage"
import PostsPage from "../pages/PostsPage"
import VisaPage from "../pages/VisaPage"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/sujets" component={SujetsPage} />
    <Route path="/posts/:id" component={PostsPage} />
    <Route path="/visa/:id" component={VisaPage} />
  </Switch>
)

export default Routes
