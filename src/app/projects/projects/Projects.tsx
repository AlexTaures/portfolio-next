import React from 'react'
import { projects as projectsData } from '@/app/data'
import { formatDate } from '@/app/utils'

export default function Projects() {
    type skillParameters = {
        title: string, content: string, date: string, url: string, image: string
    }

    const skillsMapped = (params: skillParameters, key: number) => {
        return (
            <div key={key} className='p-2 m-2 border-gray-500 border-dotted border-2 rounded-xl hover:scale-105 hover:shadow-2xl ease-in duration-100'>
                <p className='bg-orange-enphasis w-4/5 m-auto text-center font-bold py-1 mb-1'>{ params.title }</p>
                <a href={params.url} className='project-image'>
                    <div className='relative overflow-hidden flex items-center justify-center'>
                        <p className="text-transparent bg-transparent absolute bottom-0 left-0 w-full h-full flex items-center justify-center text-[2em] blur-sm hover:backdrop-blur-sm hover:bg-black/40 hover:text-white hover:blur-none ease-in duration-500">
                            Click to open
                        </p>
                        <img src={params.image} alt="project-image"/>
                    </div>
                </a>
                <div className='text-center'>
                    <p className='text-white font-bold w-1/3 p-1 mt-2 mx-auto rounded-md bg-gray-enphasis'><strong>Summary</strong></p>
                    <p className='font-bold text-gray-enphasis'>{ params.content }</p>
                    <p className='font-bold text-gray-enphasis'><strong>{ formatDate(params.date, 'Mth-yyyy') }</strong></p>
                </div>
            </div>
          )
    }

    return(
        <section className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 project-container'>
            {
                projectsData.map((project, index) => {
                   return skillsMapped(project, index)
                })
            }
        </section>
    )
}
