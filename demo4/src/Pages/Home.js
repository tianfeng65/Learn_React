import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { uid: 123, title: '技术胖的个人博客-1' },
        { uid: 456, title: '技术胖的个人博客-2' },
        { uid: 789, title: '技术胖的个人博客-3' },
      ]
    }
  }
  render() { 
    return ( 
      <div>
        <ul>
          {
            this.state.list.map((item) => {
              return (
                <li key={item.uid}>
                  <Link to={`/list/${item.uid}`}>{item.title}</Link>
                </li>
              )
            })
          }  
        </ul>  
      </div>
     );
  }
}
 
export default Home;