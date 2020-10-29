import React, {useState} from 'react'

import Card from './Card'

interface UserCardProps {
  renderCardContent?: Function
}

export interface UserInfo {
  name: string,
  age: number,
  sex: string
}
function UserCard (props: UserCardProps) {
  const [userInof] = useState<UserInfo>({
    name: '张三',
    age: 23,
    sex: '男'
  })

  const content = props.renderCardContent 
    ? props.renderCardContent(userInof)
    : (
      <div>
        <span>姓名：{userInof.name}</span>
        <span>年龄：{userInof.age}</span>
        <span>性别：{userInof.sex}</span>
      </div>
    ) 

  return (
    <Card title={'人员信息'}>
      {content}
    </Card>
  )
}

export default UserCard