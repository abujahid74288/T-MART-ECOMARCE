import React from 'react'
import { Link } from 'react-router'

const Banner = ({title, path}) => {
  return (
    <>
      <section className='bg-[url("/Banner.png")] bg-cover bg-center py-[150px]'>
        <div className="container">
          <div className='flex flex-col items-center'>
            <h2 className='text-4xl'>{title}</h2>
            <div className='flex text-lg pt-5'>
            <Link to='/'>{path}</Link>
            <p>/ {title}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
