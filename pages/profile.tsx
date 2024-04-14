import Page from '@/components/page'
import Section from '@/components/section'
import { useUser } from '@clerk/nextjs'
import { OrganizationSwitcher, SignedIn, UserButton } from '@clerk/nextjs'
import { UserProfile } from '@clerk/nextjs'
import { useDisclosure } from '@mantine/hooks'
import { Box, Group, Button, Collapse, Text} from '@mantine/core'

// currently working on getting database up and running, as well as managing organizations/invites and user profiles and data.

export default function Profile() {
	const { isLoaded, user } = useUser();
	const [opened, { toggleAccountSettings }] = useDisclosure(false);

	return (
		<Page>
			{isLoaded && user ? (
				<>
				<Group>
					<div>
						<OrganizationSwitcher afterCreateOrganizationUrl='/profile' />
					</div>
				</Group>
					<div className='pb-6 max-h-96 flex space-x-6'>

					</div>
					<div>
						<UserProfile></UserProfile>
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

