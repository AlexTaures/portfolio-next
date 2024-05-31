'use client'
import { usePathname, useRouter } from 'next/navigation'
import { Links } from "@/app/types/Links"
import { paths } from "@/app/data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderLibrary } from '@/app/icons'
import { useEffect } from 'react'

function Header() {
	const { push } = useRouter();
	const pathname =  usePathname()

	const pushPage = (Props: Links) => {
		if (!Props.external) {
			push(Props.path);
		} else {
			window.open(Props.path, '_blank');
		}
	}

	useEffect(() => {
		console.log(pathname)
	  }, [pathname]);

	return (
		<div className='flex py-1 justify-between mr-20'>
			<div className="flex gap-3 items-center py-2 px-5 bg-gradient-to-r from-orange-900 via-orange-500 to-yellow-500 hover:bg-gradient-to-l 
			transition duration-150 rounded-r-md w-60 cursor-pointer" onClick={() => push('/')} >Web Developer<FontAwesomeIcon className="text-menuIcons" icon={HeaderLibrary['faCode']}/></div>
			<div className="py-2 px-5 flex justify-center">
				{
					paths.map((path, index) => (
						<button key={index} onClick={() => pushPage(path)} className={`flex items-center gap-1 py-2 px-5 rounded-md hover:bg-orange-500 active:bg-yellow-500 hover:text-white text-gray-700`}>
							<div className={`text-menuText ${pathname == path.path ? 'border-b border-current': ''}`}>
								<FontAwesomeIcon icon={HeaderLibrary[path.icon]} className='text-menuIcon mx-1'/>
								{path.name}
							</div>
						</button>
					))
				}
			</div>
		</div>
	);
}

export default Header;