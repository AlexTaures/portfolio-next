import {personal_information as info} from "@/app/data"
import ReactCountryFlag from 'react-country-flag'
import photo from '@/resources/images/profilePhoto.jpg'
import Skills from "@/app/about/Skills/Skills"
function AboutPage() {
  const languages = info.languages.list
  return (
    <section>
      {/* personal information */}
      <div className="text-black mt-2 flex flex-wrap justify-center items-center">
        <div className="mx-5">
          <img src={photo.src} alt="profile-photo" className="w-64 rounded-[50%] shadow-lg shadow-gray-500/75" />
          <p className="text-center mt-2">{info.name}</p>
        </div>
        <div className="grid grid-cols-2 mx-5 my-5 w-[500px] gap-3">
          <p className="col-span-2 border-l-orange-enphasis border-l-4 pl-2 mb-2"><strong className="text-[2em] table-caption text-orange-enphasis font-black">{info.title}</strong></p>
          <strong>{info.grade.text}</strong>{info.grade.info}
          <strong>{info.developer.text}</strong>{info.developer.info}
          <strong>{info.country.text}</strong><span className="flex items-center gap-2">{info.country.info}<ReactCountryFlag countryCode={info.country.icon} style={{
            fontSize: '2em'
          }}/></span>
          <strong>{info.email.text}</strong>{info.email.info}
          <strong>{info.languages.text}</strong><ul>
            {
            languages.map((value, index) => {
              return <li key={index}>{value.language} ({value.level})</li>
            })
            }
          </ul>
        </div>
      </div>
      
      {/* skills */}
      <Skills />
    </section>
  )
}

export default AboutPage