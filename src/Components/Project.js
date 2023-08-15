import React from 'react'
import ProjectCard from './ProjectCard'
import MCQ from '../assets/MCQ.jpeg'
import Ecommerce from '../assets/Ecommerce.png'

let projects =[
    {
        no: 1,
        title: "WORD MAGIC - Revolutionizing MCQ Generation",
        about:"WORD MAGIC is a groundbreaking project that harnesses the power of Deep Learning, specifically Natural Language Processing (NLP), combined with the versatility of Django framework, to transform the way we approach content summarization and multiple-choice question (MCQ) generation. This innovative endeavor has the potential to reshape the education and information processing landscape.",
        pic: MCQ
    },
    {
        no: 2,
        title: "Ecommerce Website",
        about: "This ecommerce platform enables seamless online shopping, featuring a diverse product selection. A secure authentication system ensures safe user registration and login. The admin system allows comprehensive activity monitoring and transaction management. The user-friendly shopping cart system enhances the shopping experience",
        pic: Ecommerce
    },
]
const Project = () => {
  return (
    <div name='Projects' className='bg-[rgb(84,89,95)] flex flex-col min-h-screen text-gray-50   items-center' >
        {projects.map((res)=>{
            return <ProjectCard data={res}></ProjectCard>
        })}
    </div>
  )
}

export default Project