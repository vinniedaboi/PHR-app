import Link from 'next/link'
import { useRouter } from 'next/router'
import { IconHome, IconShoppingBag, IconUser } from '@tabler/icons-react'

const BottomNav = () => {
	const router = useRouter()

	return (
		<div className='fixed top-0 left-0 z-20 w-full bg-zinc-900 pt-safe sm:hidden'>
			<nav className='fixed bottom-0 w-full border-t border-slate-500 pb-safe bg-zinc-900'>
				<div className='mx-auto flex h-16 max-w-md items-center justify-around px-6'>
					{links.map(({ href, label, icon }) => (
						<Link
							key={label}
							href={href}
							className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
								router.pathname === href
									? 'text-indigo-400'
									: ' text-zinc-400 hover:text-zinc-50'
							}`}
						>
							{icon}
							<span className='text-xs text-zinc-400'>
								{label}
							</span>
						</Link>
					))}
				</div>
			</nav>
		</div>
	)
}

export default BottomNav

const links = [
	{
		label: 'Projects',
		href: '/projects',
		icon: (
			<IconHome></IconHome>
		),
	},
	{
		label: 'Sales',
		href: '/sales',
		icon: (
			<IconShoppingBag></IconShoppingBag>
		),
	},
	{
		label: 'Profile',
		href: '/profile',
		icon: (
			<IconUser></IconUser>
		),
	},
]
