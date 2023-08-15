import React from 'react'
import Logo from '../assets/logo2.png'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <div name='Contact' className='flex w-[full]   bg-[#25262A] text-white flex-wrap'>
        <div className='w-full md:w-[20%] mt-10 mb-10'><img src={Logo} alt="Logo"/></div>
        <div className='w-full md:w-[60%] md:text-[25px] text-[20px] flex justify-center items-center mb-10 md:mb-0'>&copy; Unleash the Power of Tech: Meet Our Freelancer Collective!!!
</div>
        <div className='flex justify-around w-full md:w-[20%] items-center mb-10 md:mb-0'>
            <div className='w-[50px] h-[50px] bg-[#2D2E32] p-[10px] rounded-lg'>
            <a href="https://www.instagram.com/code__fusion/?igshid=MjEwN2IyYWYwYw%3D%3D" target="_blank" rel="noopener noreferrer">
             <FaInstagram size={30} style={{color:"#FFAF29"}} />
            </a>
            </div>

            <div className='w-[50px] h-[50px] bg-[#2D2E32] p-[10px] rounded-lg'>
            <a href="https://www.linkedin.com/company/code-fusion-tech-solutions" target="_blank" rel="noopener noreferrer">
             <FaLinkedin size={30} style={{color:"#FFAF29"}} />
            </a>
            </div>
        </div>
    </div>
  )
}

export default Footer