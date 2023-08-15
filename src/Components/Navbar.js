import React, { useState } from 'react'
import { Link } from 'react-scroll/modules'
import Logo from '../assets/logo.png'
import { FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const clickNav = () => {
    setNav(!nav);
  }
  return (

    <div  className="w-full flex h-[100px] items-center  bg-[#54595F] text-gray-50 ">
        <img src={Logo} alt="Logo" style={{ width: '350px' }} className=' mt-2 relative md:left-[-10px] left-[-50px]' />
       
       <ul className='hidden md:flex mx-[40px] justify-between w-[500px] text-[22px] font-sans cursor-pointer font-semibold'>
        <li>
          <Link className='hover:border-b-2 p-1' to='Home' duration={500} smooth={true} >
            Home
          </Link>
        </li>
        <li><Link className='hover:border-b-2 p-1' to='Services' duration={500} smooth={true}>
          Services
        </Link></li>
        <li><Link className='hover:border-b-2 p-1' to='Projects' duration={500} smooth={true}>
          Projects
        </Link></li>
        <li><Link className='hover:border-b-2 p-1' to='Contact' duration={500} smooth={true}>
          Contact
        </Link></li>
      </ul>

      <div onClick={clickNav} className='md:hidden z-20 absolute right-[15px]'  >
        {nav ? <FaBars size={25} ></FaBars> : <FaTimes size={25}></FaTimes>}
      </div>
      {/* MobileMenu */}
      <ul className={!nav ? "absolute top-0 left-0 w-full h-screen flex flex-col bg-[#61676e] z-10 justify-center items-center touch-none" : "hidden"}>
        <li  className="py-4 text-5xl"> <Link onClick={clickNav} to='Home' duration={500} smooth={true}>
          Home
        </Link></li>
        <li  className="py-4 text-5xl"><Link onClick={clickNav} to='Services' duration={500} smooth={true}>
          Services
        </Link></li>
        <li  className="py-4 text-5xl"><Link onClick={clickNav} to='Projects' duration={500} smooth={true}>
          Projects
        </Link></li>
        <li  className="py-4 text-5xl"><Link onClick={clickNav} to='Contact' duration={500} smooth={true}>
          Contact
        </Link></li>
      </ul>
       
    </div>



  )
}

export default Navbar