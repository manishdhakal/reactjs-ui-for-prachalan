import React from 'react'
import {BrowserRouter as Router, Route, /*Link*/} from 'react-router-dom'
import Home from './Components/Home'


function AppRouter() {
    return (
      <Router>
          <Route path="/" exact component={Home} />
          {/* <Route path="/r/" component={RegisterTabs} /> */}
        
      </Router>
    );
  }

  export default AppRouter