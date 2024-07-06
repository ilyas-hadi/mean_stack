import React from 'react'

export default function FormRow({type,id,labelText,defaultValue}) {
  return (
    <div className='form-row'>
          <label htmlFor={id} className='form-label'>
            {labelText || id}
          </label>
          <input
            type={type}
            id={id}
            name={id}
            className='form-input'
            defaultValue={defaultValue || ''}
            required
          />
        </div>
  )
}
