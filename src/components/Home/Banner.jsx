import React, { useEffect, useState } from 'react'
import Button from '../UI/Button'

const Banner = () => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <>
      <section className='bg-[url("/Home-banner.png")] bg-center bg-cover'>
        <div className='container px-4 md:px-0 flex flex-col justify-center items-end md:items-end py-32 md:py-[276px]'>
          <div className={`max-w-full md:max-w-[431px] text-2xl md:text-3xl text-primary text-right transition-all duration-700 ease-out
            ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <h1 className='pb-4'>
              Awesome Product Collection In 2022
            </h1>
            <div className='flex justify-end'>
              <Button title={"Shop Now"} path={"/shop"}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
