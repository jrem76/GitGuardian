import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { GithubUserForm } from './Pages/GithubUserForm'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <GithubUserForm />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export { App }
