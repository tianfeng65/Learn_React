import React, {useContext} from 'react'
import {MyContext} from './context'

function Children () {
  const {theme} = useContext(MyContext)
  return (
    <div>{theme}</div>
  )
}

export default Children