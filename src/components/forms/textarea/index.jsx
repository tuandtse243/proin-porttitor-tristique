import React, { useState } from 'react'
import './textarea.css'

const TextareaForm = (props) => {
  const { label, placeholder='', rows=2 } = props;
  const [value, setValue] = useState('');

  return (
    <div className="textarea-form__container">
      <label htmlFor="textarea">{label}</label>
      <textarea
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </div>
  );
}

export default TextareaForm