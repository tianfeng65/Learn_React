import React from 'react'


interface CustomInputProps {
  value: string,
  onChange: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void
}
function CustomInput (props: CustomInputProps) {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.onChange && props.onChange(e.target.value, e)
  }
  return (
    <input type="text" value={props.value} onChange={handleInputChange}/>
  )
}

export default CustomInput