import {
	IconBed,
	IconCar,
	IconHeart,
	IconHome,
	IconBath,
	IconArrowNarrowDown,
	IconArrowNarrowUp,
} from '@tabler/icons-react'
import {
	Card,
	Image,
	Text,
	Group,
	Badge,
	Button,
	ActionIcon,
	Center,
	Collapse,
	Divider,
	Modal,
	Stack,
	Space,
	List,
	ThemeIcon,
	rem,
	Box,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classes from '../styles/BadgeCard.module.css'
import { Carousel } from '@mantine/carousel'
import ImageCarousel from './imagecarousel'
import { IconCheck } from '@tabler/icons-react'
import GoogleMap from './map'
import DisplayMap from './map'
import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

// this will be what the agent sees when they click on project details

// currently working on sizing image to not be too big.

// just got done adding more details section, expand on it

export function ProjectDetails({ data }) {
	const {
		previewimage,
		title,
		description,
		location,
		specification,
		developer,
		images,
		price,
		slogan,
		completiondate,
		holdtype,
		reasonsforsale,
	} = data

	const iconArrowDown = <IconArrowNarrowDown size={18} />
	const iconArrowUp = <IconArrowNarrowUp size={18} />

	const features = specification.map((feature) => (
		<Center key={feature.label}>
			<feature.icon size='1.05rem' className={classes.icon} stroke={1.5} />
			<Text className={classes.label} size='xs'>
				{feature.label}
			</Text>
		</Center>
	))

	const reasonsForSaleItems = reasonsforsale.map((reasons, index) => (
		<List.Item key={index}>{reasons}</List.Item>
	))

	const Map = useMemo(
		() =>
			dynamic(() => import('@/components/Map'), {
				loading: () => <p>A map is loading</p>,
				ssr: false,
			}),
		[],
	)

	const [opened, { toggle }] = useDisclosure(false)

	const [opened1, { open, close }] = useDisclosure(false)

	const [mapOpened, { toggle: toggleMap }] = useDisclosure(false)
	return (
		<Card bg='black' radius='md' p='md' className={classes.card} withBorder>
			<Card.Section>
				<ImageCarousel images={images}></ImageCarousel>
			</Card.Section>

			<Card.Section className={classes.section} mt='md'>
				<Group>
					<Text className={classes.badge} fz='lg' fw={500}>
						{title}
					</Text>
					<Badge size='sm' variant='light'>
						{location}
					</Badge>
				</Group>
				<Space h='xs' />
				<Stack gap={'xs'}>
					<Text size='lg' fw={700}>
						by {developer}
					</Text>
					<Text>From {price}</Text>
					<Text>Completing {completiondate}</Text>
					<Text>{holdtype} project</Text>
				</Stack>
				<Text className={classes.text} fz='sm' mt='xs'>
					&ldquo;{slogan}&ldquo;
				</Text>
			</Card.Section>

			<Card.Section className={classes.section}>
				<Text mt='md' className={classes.label} c='dimmed'>
					Specifications
				</Text>
				<Group gap={8} mb={-8}>
					{features}
				</Group>
			</Card.Section>
			<Card.Section className={classes.section}>
				<Stack>
					<Space></Space>
					<List
						spacing='md'
						size='sm'
						center
						icon={
							<ThemeIcon size={18} radius='xl'>
								<IconCheck style={{ width: rem(16), height: rem(16) }} />
							</ThemeIcon>
						}
					>
						{reasonsForSaleItems}
					</List>
				</Stack>
			</Card.Section>
			<Card.Section className={classes.section}>
				<Stack>
					<Space></Space>
					<Stack>
						<Text className={classes.label}>More Details</Text>
						<Button
							bg={'black'}
							style={{
								border: '1px solid gray', // Add gray border
								borderRadius: '6px', // Add border-radius for rounded corners
								display: 'flex', // Use flex display
								justifyContent: 'space-between', // Space between contents
								alignItems: 'center', // Center items vertically
								padding: '10px 16px', // Add padding
							}}
							onClick={toggleMap}
							rightSection={mapOpened ? iconArrowUp : iconArrowDown}
						>
							Location
						</Button>
						<Collapse in={mapOpened}>
							<Box>
								<iframe
									width='100%'
									height='300'
									frameBorder='0'
									scrolling='no'
									marginHeight='0'
									marginWidth='0'
									loading='lazy'
									src='https://www.openstreetmap.org/export/embed.html?bbox=101.71093225479127%2C3.1578089740778252%2C101.71371906995775%2C3.16028892537222&amp;layer=mapnik&amp;marker=3.1590489504655705%2C101.7123256623745'
								></iframe>
							</Box>
						</Collapse>
					</Stack>
				</Stack>
			</Card.Section>
			<Group mt='xs'>
				<Button bg='blue' radius='md' style={{ flex: 1 }}>
					Start selling
				</Button>
			</Group>
		</Card>
	)
}
