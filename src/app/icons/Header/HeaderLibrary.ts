import { faAddressCard, faHome, faDiagramProject } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

interface IconMap {
    [key: string]: typeof faAddressCard | typeof faHome | typeof faDiagramProject | typeof faGithub | typeof faLinkedin;
}
export const HeaderLibrary: IconMap = {
    faAddressCard, faHome, faDiagramProject,  faGithub, faLinkedin
};  