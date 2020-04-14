import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Portfolio from './Pages/Portfolio'
import Hire from './Pages/Hire'

import Nav from './component/Nav'

 class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/portfolio' component={Portfolio}></Route>
          <Route path='/hire' component={Hire}></Route>
        </Switch>
      </Router>
    )
  }
}
export default App