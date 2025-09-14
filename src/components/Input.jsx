import React, { useId, forwardRef } from 'react'

const Input =  forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    errorText = "",
    labelClassName="dark:text-white",
    ...props
}, ref) {
    const id = useId()
  return (

    <div className='w-full mt-4'>
        {label && <label className={`inline-block mb-1 pl-1 text-sm text-red-900  ${labelClassName}`} htmlFor={props.id}>{label}</label>}
        <input type={type} className={`px-3 py-4 rounded-lg bg-white text-red-900 outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} ref={ref} {...props} id={id}/>
        
        {errorText && (
            <p className="text-red-600 text-xs pl-1 pt-1">
              {errorText}
            </p>
          )}

    </div>
  )
})

export default Input