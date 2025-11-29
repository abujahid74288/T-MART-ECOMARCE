import React, { useState } from 'react'
import { CiSearch, CiUser } from 'react-icons/ci'
import { FaBars } from 'react-icons/fa'
import { TfiShoppingCart } from 'react-icons/tfi'
import { Link } from 'react-router'

const Navbar = () => {
  const [show, setShow] = useState(false) // mobile menu toggle
  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <>
      <nav className='relative'>
        <div className="container flex justify-between items-center">
          <div className='py-[54px]'>
            <Link to="/"><img src="/logo.png" alt="logo" /></Link>
          </div>

          {/* Desktop Nav */}
          <div className='hidden md:block'>
            <ul className='text-base font-medium text-secondary flex gap-10'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
               <li><Link to="/shop">Pages</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Mobile Nav */}
          <div className='md:hidden'>
            <ul className={`text-base font-medium text-secondary flex flex-col items-center transition ${show ? "translate-x-0" : "translate-x-full"} gap-10 fixed top-2/12 right-0 w-[250px] h-screen pt-5 bg-[#f1f1f1]`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/shop">Pages</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Icons + Login/SignUp */}
          <div className='flex gap-4 items-center'>
            {/* React Icons */}
            <ul className='flex gap-4 text-base items-center'>
              <li><Link to="#"><CiSearch /></Link></li>
              <li><Link to="#"><CiUser /></Link></li>
              <li><Link to="#"><TfiShoppingCart /></Link></li>
            </ul>

            {/* Login & Sign Up Buttons */}
            <button 
              onClick={() => setShowLogin(true)}
              className='px-4 py-1.5 bg-primary text-white rounded-md hover:bg-primary/90 transition'
            >
              Login
            </button>
            <button 
              onClick={() => setShowSignUp(true)}
              className='px-4 py-1.5 bg-secondary text-white rounded-md hover:bg-secondary/90 transition'
            >
              Sign Up
            </button>

            {/* Mobile menu button */}
            <button onClick={()=>setShow(!show)} className='cursor-pointer md:hidden'>
              <FaBars />
            </button>
          </div>
        </div>

        {/* Login Modal */}
        {showLogin && (
          <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
            <div className='bg-white p-8 rounded-lg w-96'>
              <h2 className='text-2xl mb-4'>Login</h2>
              <form>
                <input type="text" placeholder="Username" className='w-full mb-3 p-2 border rounded'/>
                <input type="password" placeholder="Password" className='w-full mb-3 p-2 border rounded'/>
                <button type="submit" className='w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition'>Login</button>
              </form>
              <button onClick={() => setShowLogin(false)} className='mt-4 text-sm text-gray-500 hover:underline'>
                Close
              </button>
            </div>
          </div>
        )}

        {/* Sign Up Modal */}
        {showSignUp && (
          <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
            <div className='bg-white p-8 rounded-lg w-96'>
              <h2 className='text-2xl mb-4'>Sign Up</h2>
              <form>
                <input type="text" placeholder="Username" className='w-full mb-3 p-2 border rounded'/>
                <input type="email" placeholder="Email" className='w-full mb-3 p-2 border rounded'/>
                <input type="password" placeholder="Password" className='w-full mb-3 p-2 border rounded'/>
                <button type="submit" className='w-full bg-secondary text-white py-2 rounded hover:bg-secondary/90 transition'>Sign Up</button>
              </form>
              <button onClick={() => setShowSignUp(false)} className='mt-4 text-sm text-gray-500 hover:underline'>
                Close
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar

