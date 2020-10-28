import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './index.css'
import routeConfig from './Route/index'

class AppRouter extends Component {
  render() { 
    return ( 
      <Router>
        <div className='mainDiv'>
          <div className='leftNav'>
            <h2>一级导航</h2>
            <ul>
              {
                routeConfig.map((item) => {
                  return (
                    <li key={item.path}><Link to={item.path}>{item.title}</Link></li>
                  )
                })
              }
            </ul>
          </div>
          <div className='rightMain'>
            {
              routeConfig.map((item) => {
                return (
                  <Route key={item.path} path={item.path} exact={item.exact} component={item.component}></Route>
                )
              })
            }
          </div>
        </div>
      </Router>
     );
  }
}
 
export default AppRouter;