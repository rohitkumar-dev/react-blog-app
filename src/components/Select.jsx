import React, {useId} from 'react'

function Select({
    options,
    label,
    className='',
    errorText="",
    ...props
}, ref) {
    const id=useId()
  return (
    <div className='w-full mt-4'>
        {label && <label htmlFor={id} className='inline-block mb-1 pl-1 text-sm text-red-900 dark:text-white'>{label}</label>}
        <select className={` px-2 py-4 rounded-lg bg-white text-red-900 outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} {...props} id={id} ref={ref}>
            { options?.map(option=>(
                <option key={option} value={option} className=''>
                    {option}
                </option>
            )) }
        </select>
        {errorText && (
            <p className="text-red-400 text-xs pl-1 pt-1">
              {errorText}
            </p>
          )}
    </div>
  )
}

export default React.forwardRef(Select)

