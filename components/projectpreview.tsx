import {
	IconBed,
	IconCar,
	IconHeart,
	IconHome,
	IconBath,
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
	Space,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classes from '../styles/BadgeCard.module.css'
import { Carousel } from '@mantine/carousel'
import { ProjectDetails } from './projectdetails'

// this will be what the agent sees when scrolling through project list.

export function ProjectPreview({ data }) {
	const {
		previewimage,
		title,
		description,
		location,
		specification,
		developer,
		images,
	} = data

	const features = specification.map((feature) => (
		<Center key={feature.label}>
			<feature.icon size='1.05rem' className={classes.icon} stroke={1.5} />
			<Text className={classes.label} size='xs'>
				{feature.label}
			</Text>
		</Center>
	))

	const [opened, { toggle }] = useDisclosure(false)

	const [opened1, { open, close }] = useDisclosure(false)

	return (
		<Card bg='black' radius='md' p='md' className={classes.card} withBorder>
			<Card.Section>
				<Image src={previewimage} alt={title} height={120} />
			</Card.Section>

			<Card.Section className={classes.section} mt='md'>
				<Group justify='apart'>
					<Text className={classes.badge} fz='lg' fw={500}>
						{title}
					</Text>
					<Badge size='sm' variant='light'>
						{location}
					</Badge>
				</Group>
				<Divider my='sm' variant='dashed' />
				<Button size='xs' bg='blue' onClick={toggle}>
					Read Description...
				</Button>
				<Collapse in={opened}>
					<Text className={classes.text} fz='sm' mt='xs'>
						{description}
					</Text>
				</Collapse>
			</Card.Section>

			<Card.Section className={classes.section}>
				<Text mt='md' className={classes.label} c='dimmed'>
					Specifications
				</Text>
				<Space></Space>
				<Group gap={8} mb={-8}>
					{features}
				</Group>
			</Card.Section>

			<Group mt='xs'>
				<Modal
					opened={opened1}
					onClose={close}
					withCloseButton={true}
					size='100%'
				>
					<ProjectDetails data={data}></ProjectDetails>
				</Modal>
				<Button onClick={open} bg='blue' radius='md' style={{ flex: 1 }}>
					Project details
					{/*
          This will be what the agent sees when they click on project details (our component is called projectdetails)
          */}
				</Button>
				<ActionIcon variant='default' radius='md' size={24}>
					<IconHeart className={classes.like} stroke={1.5} />
				</ActionIcon>
			</Group>
		</Card>
	)
}
