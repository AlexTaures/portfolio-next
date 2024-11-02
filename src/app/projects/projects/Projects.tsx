import React from 'react'
import { projects as projectsData, skills } from '@/app/data'
import { formatDate } from '@/app/utils'
import { SkillsLibrary } from '@/app/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Projects() {
    type skillParameters = {
        title: string, content: string, date: string, url: string, image: string, skills: string[], complexity: number
    }
    type skillObj = {
        icon: string, text: string, level: number, defaultColor: string
    }    
    
    const skillsMapped = (params: skillParameters, key: number) => {
        return (
            <div key={key} className='p-2 m-2 border-gray-500 border-dotted border-2 rounded-xl hover:scale-105 hover:shadow-2xl ease-in duration-100 relative'>
                <p className='bg-orange-enphasis w-4/5 m-auto text-center font-bold py-1 mb-1'>{ params.title }</p>
                <a href={params.url} className='project-image'>
                    <div className='relative overflow-hidden items-center justify-center w-full'>
                        <p className="text-transparent bg-transparent absolute bottom-0 left-0 w-full h-full flex items-center justify-center text-[2em] blur-sm hover:backdrop-blur-sm hover:bg-black/40 hover:text-white hover:blur-none ease-in duration-500">
                            Click to open
                        </p>
                        <Image src={params.image} alt="project-image" width={500} height={500}/>
                    </div>
                </a>
                <div className='text-center mb-8'>
                    <p className='text-white font-bold w-1/3 p-1 mt-2 mx-auto rounded-md bg-gray-enphasis'><strong>Summary</strong></p>
                    <p className='font-bold text-gray-enphasis'>{ params.content }</p>
                    <p className='font-bold text-gray-enphasis'><strong>{ formatDate(params.date, 'Mth-yyyy') }</strong></p>
                </div>
                <div className='skill-list absolute bottom-1 right-0 min-[250px]:flex justify-between w-full px-2'>
                    <div className='text-black text-[0.8em] flex items-center gap-2'><strong>Complexity:</strong>
                    <div className='grid grid-cols-3 w-10'>
                        <div className={`w-3 h-3 rounded-[50%] bg-orange-enphasis`}></div>
                        <div className={`w-3 h-3 rounded-[50%] ${params.complexity >= 2? "bg-orange-enphasis":"bg-slate-500"}`}></div>
                        <div className={`w-3 h-3 rounded-[50%] ${params.complexity > 2 ? "bg-orange-enphasis":"bg-slate-500"}`}></div>
                    </div>
                    </div>
                    <div className='flex gap-1'>{
                        params.skills.map((currentSkill: string, index) => {
                            const skillObj: skillObj[] = skills.skills.filter(skill => skill.text.toLowerCase().includes(currentSkill.toLowerCase()));
                            return <FontAwesomeIcon key={index} icon={SkillsLibrary[skillObj[0].icon]} style={{color: skillObj[0].defaultColor, fontSize: '1.5em'}}/>
                        })
                    }</div>
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
