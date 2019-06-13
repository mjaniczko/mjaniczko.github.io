import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory as createHistory } from 'history'

import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import MyWork from '../components/MyWork'
import Contact from '../components/Contact'


export const history = createHistory()


const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/my-work" component={MyWork} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter