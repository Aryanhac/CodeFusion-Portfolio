import React from 'react'
import ThoughtCard from './ThoughtCard'
import thought1 from '../assets/thought1.png'
let thoughts =[
    {
        no: 1,
        thought:"I Work With Many WordPress Coders For The Past 10 Years And It's Hard To Find Someone With This Level Of Skill And Strict Attention To Detail. He Was Excellent. Did A Perfect Job And Actually Exceeded My Expectations. I Will Hire Him Again.",
        name:"Rajan Kumar",
        pic: thought1
    },
    {
        no: 2,
        thought:"I Work With Many WordPress Coders For The Past 10 Years And It's Hard To Find Someone With This Level Of Skill And Strict Attention To Detail. He Was Excellent. Did A Perfect Job And Actually Exceeded My Expectations. I Will Hire Him Again.",
        name:"Rajan Kumar",
        pic: thought1
    }
]
const Thoughts = () => {
  return (
    <div className='bg-[rgb(84,89,95)] flex flex-col min-h-screen text-gray-50   items-center pt-[100px] md:pt-0' >
        {thoughts.map((res)=>{
            return <ThoughtCard data={res}></ThoughtCard>
        })}
    </div>
  )
}

export default Thoughts