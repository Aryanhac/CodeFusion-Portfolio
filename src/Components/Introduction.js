import React from 'react'
import Back from '../assets/introBack.png'
import Per from '../assets/Programmer-bro.png'

const Introduction = () => {
  const emailAddress = 'codefusion138@gmail.com';

  const handleContactClick = () => {
    const mailtoLink = `https://mail.google.com/mail/?view=cm&to=${emailAddress}`;
    window.location.href = mailtoLink;
  };

  return (
    <div name='Home' className='bg-[#54595F] flex md:h-screen text-gray-50 flex-wrap' >
        <div className=' w-full md:w-[35%]'>
            <div className=' relative md:top-[100px] top-[10px] md:left-[60px] left-[20px] w-[86%]'>
            <div className=' text-[#64F4AB] text-[20px]'>Unleash the Power of Tech: Meet Our Freelancer Collective!!!</div>
            <div className=' font-bold text-[70px] text-[#FFFFFF] font-sans'>Hello <br></br> We're Code <br></br>Fusion</div>
            {/* <div className='text-[20px]'>Unleash the Power of Tech: Meet Our Freelancer Collective!!!<br></br></div> */}
            <div className='text-[20px]'>We've done remote work for agencies, consultant for startup, and collaborated with talented people to create digital products</div>
            <div className=' mt-10 mb-10 w-[180px] h-[50px] rounded-md bg-gradient-to-r from-yellow-400 to-orange-400 text-center text-black text-[20px] pt-2 cursor-pointer ' onClick={handleContactClick}>Contact Me</div>
            </div>
        </div>
        <div className=' w-full md:w-[65%] bg-cover bg-center flex justify-center min-h-screen' style={{ backgroundImage:`url(${Back})`}}>
            <img src={Per} className='relative md:top-[-2px]' style={{height:"750px"}}></img>
        </div>
    </div>
  )
}

export default Introduction