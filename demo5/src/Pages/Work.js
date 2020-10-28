import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import Money from './works/Money';
import Getup from './works/Getup';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <div className='topNav'>
          <ul>
            <li><Link to='/work/money'>加薪</Link></li>
            <li><Link to='/work/getup'>升职</Link></li>
          </ul>
        </div>
        <div>
          <Route path='/work/money' component={Money}></Route>
          <Route path='/work/getup' component={Getup}></Route>
        </div>
        <div></div>
      </div>
     );
  }
}
 
export default Work;