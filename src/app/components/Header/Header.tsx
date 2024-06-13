'use client'
import { usePathname, useRouter } from 'next/navigation'
import { Links } from "@/app/types/Links"
import { paths } from "@/app/data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderLibrary } from '@/app/icons'
import './Header.scss'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Header() {
	const { push } = useRouter();
	const pathname =  usePathname();
	const [blockMenu, setBlockMenu] = useState(false);

	const pushPage = (Props: Links) => {
		if (!Props.external) {
			push(Props.path);
		} else {
			window.open(Props.path, '_blank');
		}
	}
	
	const linkMapping = () => {
		return paths.map((path, index) => (
			<button key={index} onClick={() => pushPage(path)} className={`flex items-center gap-1 py-2 px-5 rounded-md hover:bg-orange-500 active:bg-yellow-500 hover:text-white text-gray-700`}>
				<div className={`text-menuText ${pathname == path.path ? 'border-b border-current': ''}`}>
					<FontAwesomeIcon icon={HeaderLibrary[path.icon]} className='text-menuIcon mx-1'/>
					{path.name}
				</div>
			</button>
		))
	}

	const showHideBlockMenu = () => {
		setBlockMenu(!blockMenu)
	}

	return (
		<div className='flex py-1 justify-between relative' id="header-container">
			<div className="flex gap-3 items-center py-2 px-5 bg-gradient-to-r from-orange-900 via-orange-500 to-yellow-500 hover:bg-gradient-to-l 
			transition duration-150 rounded-r-md w-60 cursor-pointer" id="main-logo" onClick={() => push('/')} >Web Developer<FontAwesomeIcon className="text-menuIcons" icon={HeaderLibrary['faCode']}/></div>
			<div className="py-2 px-5 flex justify-center" id="header-links-inline">
				{ linkMapping() }
			</div>
			<button id='menu-btn' className='absolute h-10 w-10 right-5 top-3 hover:bg-black hover:bg-opacity-20 rounded-[50%] flex items-center justify-center' onClick={showHideBlockMenu}><FontAwesomeIcon icon={faBars} className='text-black text-[1.5em]'/></button>
			<div id='header-links-block' className={`absolute z-10 bg-white right-0 w-[90%] mt-14 px-10 py-5 shadow-md rounded-lg ${blockMenu ? 'menu-show' : 'menu-hide'}`}>{ linkMapping() }</div>
		</div>
	);
}

export default Header;