import React, { useState } from 'react'
import './input.css'

const InputForm = (props) => {
  const { label, placeholder='', type='text' } = props;
  const [value, setValue] = useState('');

  return (
    <div className='input-form__container'>
      {
        !!label && <label htmlFor="input">{label}</label>
      }
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default InputForm