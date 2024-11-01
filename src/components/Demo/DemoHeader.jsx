import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { nav } from '../../data'
import Auth from './Auth/Auth'

const DemoHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const scrollMe = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
    };
    window.addEventListener('scroll', scrollMe);
  }, []);

  return (
    <header className={`border-b border-black sticky top-0 z-50 bg-banner ${isActive ? "bg-white" : "bg-banner"} transition-all duration-500`}>
      <div className='size flex justify-between items-center h-[70px]'>
        <Link to='/'>
          <img className='w-[150px]' src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png" alt="logo" />
        </Link>

        <div className='flex items-center gap-5'>
          <div className='hidden text-sm sm:flex items-center gap-5'>
            {nav.map((link, i) => (
              <Link key={i} to={link.path}>{link.title}</Link>
            ))}
          </div>
          <div className='relative'>
            <button onClick={() => setModal(true)} className='hidden text-sm sm:flex items-center gap-5'>Sign In</button>
            <Auth modal={modal} setModal={setModal} />
          </div>
          <button onClick={() => setModal(true)} className={`text-white p-2 px-3 items-center rounded-full text-sm font-medium ${isActive ? "bg-green-700" : "bg-black"}`}>Get Started</button>
        </div>
      </div>
    </header>
  )
}

export default DemoHeader