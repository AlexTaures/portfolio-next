import { faHtml5, faJs, faLaravel, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
interface IconMap {
    [key: string]: typeof faHtml5
                 | typeof faJs
                 | typeof faCss3Alt
                 | typeof faReact
                 | typeof faLaravel
                 | typeof faDatabase
                 | typeof faPython
                 | typeof faNodeJs;
}
export const SkillsLibrary: IconMap = {
    faHtml5, faJs, faCss3Alt, faReact, faLaravel, faDatabase, faPython,
    faNodeJs
};  