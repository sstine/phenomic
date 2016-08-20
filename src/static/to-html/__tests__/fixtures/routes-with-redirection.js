import React from "react"
import { Route, Redirect } from "react-router"

/* eslint-disable react/no-multi-comp */

const TestContainer = () => (
  <p>{ "TestContainer" }</p>
)

export default (
  <Route>
    <Redirect from="redirect-from-me" to="redirect-to-me" />
    <Route path="*" component={ TestContainer } />
  </Route>
)
