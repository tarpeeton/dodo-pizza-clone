import { FC } from 'react'
import Button from './button'

interface Props {
	/* props definition */
}

const DropDown: FC<Props> = ({ /* props */ }) => {
	return (
		<div className='absolute top-[50px] w-[160px] rounded-2xl bg-slate-50'>
			<div className='flex items-center justify-between py-[8px] px-[12px]'>
				<Button label='Русский' fontSize={14} weigt={600}/>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none" viewBox="0 0 11 11"><path fill="#FF6900" fill-rule="evenodd" d="M9.906.871a.75.75 0 0 1 .222 1.038L5.251 9.446l-.014.021c-.092.143-.187.29-.278.406a1.3 1.3 0 0 1-.482.397 1.25 1.25 0 0 1-.938.032 1.3 1.3 0 0 1-.508-.363c-.099-.109-.204-.248-.306-.385l-.015-.02L.398 6.452a.75.75 0 0 1 1.2-.9L3.91 8.634c.044.058.042.058.082-.003l4.877-7.537A.75.75 0 0 1 9.906.87" clip-rule="evenodd"></path></svg>
				</span>
			</div>
			<div className='flex items-center justify-between py-[8px] px-[12px]'>
				<Button label='English' fontSize={14} weigt={600}/>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none" viewBox="0 0 11 11"><path fill="#FF6900" fill-rule="evenodd" d="M9.906.871a.75.75 0 0 1 .222 1.038L5.251 9.446l-.014.021c-.092.143-.187.29-.278.406a1.3 1.3 0 0 1-.482.397 1.25 1.25 0 0 1-.938.032 1.3 1.3 0 0 1-.508-.363c-.099-.109-.204-.248-.306-.385l-.015-.02L.398 6.452a.75.75 0 0 1 1.2-.9L3.91 8.634c.044.058.042.058.082-.003l4.877-7.537A.75.75 0 0 1 9.906.87" clip-rule="evenodd"></path></svg>
				</span>
			</div>
			<div className='flex items-center justify-between py-[8px] px-[12px]'>
				<Button label='o‘zbek'  fontSize={14} weigt={600}/>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none" viewBox="0 0 11 11"><path fill="#FF6900" fill-rule="evenodd" d="M9.906.871a.75.75 0 0 1 .222 1.038L5.251 9.446l-.014.021c-.092.143-.187.29-.278.406a1.3 1.3 0 0 1-.482.397 1.25 1.25 0 0 1-.938.032 1.3 1.3 0 0 1-.508-.363c-.099-.109-.204-.248-.306-.385l-.015-.02L.398 6.452a.75.75 0 0 1 1.2-.9L3.91 8.634c.044.058.042.058.082-.003l4.877-7.537A.75.75 0 0 1 9.906.87" clip-rule="evenodd"></path></svg>
				</span>
			</div>
		</div>
	)
}

export default DropDown