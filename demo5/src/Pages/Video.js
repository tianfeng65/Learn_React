import React, { Component } from 'react';
import ReactPage from './videos/React'
import Vue from './videos/Vue'
import Flutter from './videos/Flutter'
import {Link, Route} from 'react-router-dom'

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <div className='topNav'>
          <ul>
            <li><Link to='/video/react'>react</Link></li>
            <li><Link to='/video/vue'>vue</Link></li>
            <li><Link to='/video/flutter'>flutter</Link></li>
          </ul>
        </div>
        <div className='videoContent'>
          <Route path='/video/react' component={ReactPage}></Route>
          <Route path='/video/vue' component={Vue}></Route>
          <Route path='/video/flutter' component={Flutter}></Route>
        </div>
        <div></div>
      </div>
     );
  }
}
 
export default Video;