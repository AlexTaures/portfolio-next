import React from 'react'
import { skills } from '@/app/data'
import { SkillsLibrary } from '@/app/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Skills() {
  type skillParameters = {
    color: string | null | undefined,
    size: string | null | undefined
  }

  type skillObj = {
    icon: string | undefined,
    text: string,
    level: number
  }

  const skillGraph = (skill: skillObj, params: skillParameters) => {
    const color = params.color?params.color:"text-black";
    const size = params.size?`text-[${params.size}]`:"text-[1em]"
    const classes = `${color} ${size} flex items-center justify-between w-[220px] mx-auto
    my-3`;
    return (
      <div className={classes}>
        {skill.icon?<FontAwesomeIcon icon={SkillsLibrary[skill.icon]} className=''/>:false}
        <span className=''><strong>{skill.text}</strong></span>
        <div className='grid grid-cols-3 gap-1 w-20 mx-2'>
          <div className={`w-5 h-5 bg-orange-enphasis`}></div>
          <div className={`w-5 h-5 ${skill.level >= 2? "bg-orange-enphasis":"bg-slate-500"}`}></div>
          <div className={`w-5 h-5 ${skill.level > 2 ? "bg-orange-enphasis":"bg-slate-500"}`}></div>
        </div>
      </div>
    )
  }

  return (
    <section className='mx-6 mt-10'>
      <div><p className="col-span-2 border-l-orange-enphasis border-l-4 pl-2 mb-2"><strong className="text-[2em] text-orange-enphasis">{skills.headers.title}</strong></p></div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
        {skills.skills.map((item, index) => {
          return skillGraph(item, {
            color: "text-black",
            size: "1.2em"
          })
        })}
      </div>
    </section>
  )
}
