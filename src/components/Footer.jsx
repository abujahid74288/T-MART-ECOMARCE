import React from 'react'
import { FaArrowRight, FaGooglePlusG, FaLocationDot, FaPhoneVolume, FaTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { RiFacebookFill } from 'react-icons/ri'
import { TiSocialInstagram } from 'react-icons/ti'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
      <section className='pt-[100px] bg-background'>
        <div className="container text-secondary">
          <div className='grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4'>
            <div>
              <Link to="/"><img className='pb-7' src="/logo.png" alt="logo" /></Link> 
              <div className='flex gap-4'>
                <FaLocationDot />
                <p className='text-base pb-4 w-[200px]'> 194 Main Rd T, FS Rayed VIC 3057, USA</p>
              </div>
              <div className='flex gap-4 text-base'>
                <MdEmail />
                <p className='text-base pb-4 w-[200px]'> info@example.com</p>
              </div>
              <div className='flex gap-4 text-base'>
                <FaPhoneVolume />
                <p className='text-base pb-4'> +012 345 678 102</p>
              </div>
              <div className='pb-[72px]'>
                <ul className='flex gap-4 text-base'>
                  <li className='w-10 h-10 flex justify-center items-center text-secondary border rounded-[50%]'><a href="#"><FaTwitter /></a></li>
                  <li className='w-10 h-10 flex justify-center items-center text-secondary border rounded-[50%]'><a href="#"><TiSocialInstagram /></a></li>
                  <li className='w-10 h-10 flex justify-center items-center text-secondary border rounded-[50%]'><a href="#"><RiFacebookFill /></a></li>
                  <li className='w-10 h-10 flex justify-center items-center text-secondary border rounded-[50%]'><a href="#"><FaGooglePlusG /></a></li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-medium text-primary pb-7'>Categories</h3>
              <ul className='text-base flex flex-col gap-2.5'>
                <li><Link to="/">Men</Link></li>
                <li><Link to="/">Women</Link></li>
                <li><Link to="/">Accessories</Link></li>
                <li><Link to="/">Shoes</Link></li>
                <li><Link to="/">Dress</Link></li>
                <li><Link to="/">Denim</Link></li>
              </ul>
            </div>

            <div className='pb-2.5'>
              <h3 className='text-lg font-medium text-primary pb-7'>Infomation</h3>
              <ul className='text-base flex flex-col gap-2.5'>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Contact Us</Link></li>
                <li><Link to="/">Terms & Conditions</Link></li>
                <li><Link to="/">Returns & Exchanges</Link></li>
                <li><Link to="/">Shipping & Delivery</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className='pb-2.5'>
              <h3 className='text-lg text-primary pb-8'>Newsletter</h3>
              <p className='text-base pb-3.5'>Subscribe to our newsletter and get 10% off your first purchase .</p>
              <div className='w-full border border-b-secondary flex items-center'>
                <input className='w-full py-2.5 px-5 border-r-2' type="email" placeholder='Email Address' />
                <button className='h-full px-4'><FaArrowRight /></button>
              </div>
            </div>
          </div>

           <div className='py-4 border-t border-secondary flex justify-between'>
              <p>© 2021 All Right Reserved.</p>
              <ul className='flex justify-center items-center gap-7'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Product</Link></li>
                <li><Link to="/">Contact Us</Link></li>
              </ul>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer
