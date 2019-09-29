import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Components/Home'
import Beauty from './Components/Beauty'
import Trending from './Components/Trending'
import Profile from './Components/Profile'
import Login from './Components/Login'


function AppRouter() {
    return (
      <Router>
          <Route path="/" exact component={Home} />
          <Route path='/beauty' component={Beauty}/>
          <Route path='/trending' component={Trending}/>
          <Route path='/profile' component={Profile}/>

          <Route path="/login" component={Login} />
        
      </Router>
    );
  }

  export default AppRouter