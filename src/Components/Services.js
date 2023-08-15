import React from 'react'
import CapabilitiesCard from './CapabilitiesCard'
import './Services.css'

let capabilities =[
    {   
        img: "",
        title:"Web Wizards",
        about:"Craft captivating websites that engage and inspire with our web developers"
    },
    {
        title:"Machine Learning Maestros",
        about:"Transform data into insights with our adept ML experts"
    },
    {
        title:"WordPress Whizzes",
        about:"Elevate your online presence with stunning WordPress creations"
    },
    {
        title:"Android Artisans",
        about:"Shape your Android visions into apps that resonate"
    },
    {
        title:"UI/UX Virtuosos",
        about:"Design seamless user experiences with our UI/UX maestros"
    },
    {
        title:"Database Doyens",
        about:" Organize and optimize data with our database experts"
    },
    {
        title:"IT Support Heroes",
        about:"Solve tech puzzles with our IT support specialists"
    },
    {
        title:"Data Analysis Aces",
        about:"Uncover insights from data with our analysis experts"
    },
    {
        title:"DevOps And MLOps Virtuosos",
        about:"Automate and enhance workflows with our DevOps wizards"
    }
]

const Services = () => {
  return (
    <div name='Services' className=' min-h-screen w-full flex  items-center bg-[rgb(84,89,95)] justify-center '>
        <div className='flex flex-wrap justify-center w-[80%]'>
       {
         capabilities.map((res)=>{
           return <CapabilitiesCard data={res}></CapabilitiesCard>
         })
       }
       </div>
    </div>
  )
}

export default Services