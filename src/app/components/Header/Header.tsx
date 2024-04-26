'use client'
import { useRouter } from 'next/navigation'
import { Links } from "@/app/types/Links"
import paths from "@/app/components/Header/paths.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderLibrary } from '@/app/icons'

function Header() {
	const { push } = useRouter();

	const pushPage = (Props: Links) => {
		if (!Props.external) {
			push(Props.path);
		} else {
			window.open(Props.path, '_blank');
		}
	}

	return (
		<div className='flex bg-black/50 py-1'>
			<div className="flex items-center py-2 px-5 bg-gradient-to-r from-orange-900 via-orange-500 to-yellow-500 hover:bg-gradient-to-l 
			transition duration-150 rounded-r-md w-60">Web Developer</div>
			<div className="py-2 px-5 w-full flex justify-center">
				{
					paths.map((path, index) => (
						<button key={index} onClick={() => pushPage(path)} className='flex items-center gap-1 py-2 px-5 rounded-md hover:bg-orange-500 active:bg-yellow-500'>
							<FontAwesomeIcon icon={HeaderLibrary[path.icon]} className='text-2xl'/>
							{path.name}
						</button>
					))
				}
			</div>
		</div>
	);
}

export default Header;