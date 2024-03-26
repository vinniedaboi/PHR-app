import Page from '@/components/page'
import Section from '@/components/section'
import { useUser } from '@clerk/nextjs'
import { OrganizationSwitcher, SignedIn, UserButton } from '@clerk/nextjs'

export default function Profile() {
	const { isLoaded, user } = useUser()

	return (
		<Page>
			{isLoaded && user ? (
				<>
					<div className='pb-6 max-h-96 flex space-x-6'>
						<dl>
							<div className='px-8 py-2'>
								<dt className='text-sm font-semibold'>User ID</dt>
								<dd className='mt-1 text-sm text-white sm:mt-0 sm:col-span-2 flex gap-2'>
									{user.id}
								</dd>
							</div>
							{user.firstName && (
								<div className='px-8 py-2'>
									<dd className='mt-1 text-sm text-white sm:mt-0 sm:col-span-2'>
										{user.firstName} {user.lastName}
									</dd>
								</div>
							)}
						</dl>
					</div>
					<div>
						<OrganizationSwitcher afterCreateOrganizationUrl='/profile' />
					</div>
				</>
			) : (
				<div className='text-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
					Loading user data...
				</div>
			)}
		</Page>
	)
}
