import React from 'react';
import './App.css';
import UserCard from './UserCard'
import {UserInfo} from './UserCard'

function App() {
  function renderCardContent(userInfo: UserInfo) {
    return (
      <ul style={{textAlign: 'left'}}>
        <li>姓名：{userInfo.name}</li>
        <li>年龄：{userInfo.age}</li>
        <li>性别：{userInfo.sex}</li>
      </ul>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <UserCard 
          renderCardContent={renderCardContent}
        ></UserCard>
      </header>
    </div>
  );
}

export default App;
