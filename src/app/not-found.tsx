'use client'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import HomePage from './components/layout/home'

interface Props {}

const NotFound: NextPage<Props> = ({}) => {
	const router = useRouter()
	useEffect(() => router.push('/'), [router])
	return <HomePage/>

}
export default NotFound
