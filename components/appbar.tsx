'use client'


import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Image from 'next/image'

const links = [
	{ label: 'Profile', href: '/profile' },
	{ label: 'Projects', href: '/projects' }
]

const Appbar = () => {
	const router = useRouter()
	const isHomePage = router.pathname === '/';
	const isProjectsPage = router.pathname === '/projects';
	const isProfilePage = router.pathname === '/profile';
	const h1Content = isHomePage ? 'Home' : isProjectsPage ? 'Projects' : isProfilePage ? 'Profile' : 'PHR Agent App';

	return (
		<div className='fixed top-0 left-0 z-20 w-full bg-zinc-900 pt-safe'>
			<header className='border-b-2  px-safe border-zinc-800 bg-zinc-900'>
				<div className='mx-auto flex h-20 max-w-screen-md items-center justify-between px-6'>
					<Link href='/'>
						<h1 className='font-black text-zinc-100 hover:text-zinc-400'>
							{h1Content}
						</h1>
					</Link>
					<nav className='flex items-center space-x-6'>
						<div className='hidden sm:block'>
							<div className='flex items-center space-x-6'>
								{links.map(({ label, href }) => (
									<Link
										key={label}
										href={href}
										className={`text-sm ${router.pathname === href
											? ' text-indigo-400'
											: ' text-zinc-400 font-bold hover:text-zinc-50'
											}`}
									>
										{label}
									</Link>
								))}
							</div>
						</div>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Appbar