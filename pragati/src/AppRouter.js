import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Components/Home'
import Beauty from './Components/Beauty'
import Trending from './Components/Trending'
import Post from './Components/Profile'

function AppRouter() {
    return (
      <Router>
          <Route path="/" exact component={Home} />
          <Route path='/beauty' component={Beauty}/>
          <Route path='/trending' component={Trending}/>
          <Route path='/profile' component={Post}/>

          {/* <Route path="/r/" component={RegisterTabs} /> */}
        
      </Router>
    );
  }

  export default AppRouter