"use client"
import { FC, useState  , MouseEvent} from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import DropDown from '@/app/ui/dropdown'
interface Props {
	children: React.ReactNode
}

const HeaderComponet: FC<Props> = ({children}) => {
	const [open , setIsOpen] = useState(false)
	
	const selectLanguage = (e: MouseEvent<HTMLButtonElement>) => [
		setIsOpen(!open)
	]
	console.log(open)
	return (
		<>

		<div className={styles.header}>
			<div className='flex items-center'>
				<button className='flex items-center' onClick={selectLanguage}>
					<div className='flex relative hover:-translate-y-1 hover:stroke-yellow-600'>
						<svg
							className="w-6 h-6 "
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 25 25"
						>
							<path
								stroke='#000'
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.7"
								d="M3.664 12.438a9 9 0 1 0 18 0 9 9 0 0 0-18 0"
							></path>
							<path
								stroke='#000'
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.7"
								d="M13.664 3.538s3 3.534 3 8.9-3 8.9-3 8.9M11.664 21.338s-3-3.533-3-8.9c0-5.366 3-8.9 3-8.9M4.664 15.438h16M4.664 9.438h16"
							></path>
						</svg>
						<span className={styles.language}>
							<p>RU</p>
							</span>

					</div>


					<div className=' font-semibold text-sm text-black ml-[22px] hover:text-[rgb(255,105,0)] '><p>Язык</p></div>


				</button>
		{open && <DropDown/>}


			</div>
			<div>
				<ul className='flex items-center justify-around  '>
				<li className=' font-semibold text-sm text-black pl-[14px] ml-[20px] hover:text-[rgb(255,105,0)] transition duration-[0.25s ,  padding 0.25s ]  ease-out flex items-center relative'>
					<span className={styles.live}/>
					<Link href='/Франшиза'>
				Прямой эфир
					</Link></li>
					<li className=' font-semibold text-sm text-black pl-[14px] ml-[20px] hover:text-[rgb(255,105,0)] transition duration-[0.25s ,  padding 0.25s ]  ease-out'><Link href='/Франшиза'>
						Франшиза
					</Link></li>
					<li className=' font-semibold text-sm text-black pl-[14px] ml-[20px] hover:text-[rgb(255,105,0)]'>
						<Link href='/franshises'>
							О нас
						</Link>
					</li>
					<li className='font-semibold text-sm text-black pl-[14px] ml-[20px] hover:text-[rgb(255,105,0)]'>
						<Link href='/contact'>
							Контакты
						</Link>
					</li>
				</ul>
			</div>
		</div>
		{children}</>
	)
}

export default HeaderComponet