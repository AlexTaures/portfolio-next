import React from 'react'
import skills from '@/app/about/Skills/skills.json'
import { type } from 'os';

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
    const classes = `${color} ${size} flex`;
    return (
      <div className={classes}>
        <span>{skill.text}</span>
        <div className='grid grid-cols-3 gap-1 w-20 mx-2'>
          <div className={`w-5 h-5 bg-orange-700`}></div>
          <div className={`w-5 h-5 ${skill.level <= 2? "bg-orange-700":"bg-slate-500"}`}></div>
          <div className={`w-5 h-5 ${skill.level <= 3? "bg-orange-700":"bg-slate-500"}`}></div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {skills.skills.map((item, index) => {
        return skillGraph(item, {
          color: "text-black",
          size: "1.2em"
        })
      })}
    </div>
  )
}
