import React from 'react'

export default function Input(props) {
    const {id,title,type,value,name,handelData,errors}=props
  return (
    <div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input type={type} value={value} name={name} className="form-control" id={id} onChange={handelData}/>
    {errors[name]&&<p className='text-danger'>{errors[name]}</p>}
  </div>
  )
}
