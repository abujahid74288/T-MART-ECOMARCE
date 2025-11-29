import React from 'react'
import { Link } from 'react-router'
const Button = ({title, path, icon}) => {
  return (
    <>
        <button className='py-2.5 px-4 text-nowrap text-base cursor-pointer border rounded-md border-primary active:scale-[1.05]'>
            <Link to={path}>{title}</Link>
        </button>
    </>
  )
}

export default Button
