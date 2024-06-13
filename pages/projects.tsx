import Page from '@/components/page'
import {
	IconBed,
	IconCar,
	IconHome,
	IconBath,
	IconHome2,
	IconRefresh,
	IconSearch,
	IconArrowRight,
} from '@tabler/icons-react'
import { Button, Group, Autocomplete, ActionIcon, Modal } from '@mantine/core'
import CarouselComponent from '@/components/projectpreviewcarousel'
import { useState } from 'react'
// figure out how to load data from database.
import project from '../projects.json'
import { ProjectDetails } from '@/components/projectdetails'

const mapIconStringToObject = (iconString: any) => {
	switch (iconString) {
		case 'IconBed':
			return IconBed
		case 'IconBath':
			return IconBath
		case 'IconHome':
			return IconHome
		case 'IconCar':
			return IconCar
		case 'IconHome2':
			return IconHome2
		default:
			// You can handle an unknown icon string here, or just return null
			return null
	}
}

// Now, you can use this function when parsing your JSON data
const parseJsonData = (jsonData: any) => {
	return jsonData.map((item: any) => ({
		previewimage: item.previewimage,
		title: item.title,
		location: item.location,
		description: item.description,
		specification: item.specification.map(({ label, icon }: any) => ({
			label,
			icon: mapIconStringToObject(icon),
		})),
		images: item.images,
		developer: item.developer,
		price: item.price,
		slogan: item.slogan,
		completiondate: item.completiondate,
		holdtype: item.holdtype,
		reasonsforsale: item.reasonsforsale,
		mapembed: item.mapembed,
		amenities: item.amenities,
		unitTypes: item.unitTypes,
	}))
}

// with searchbar, we give in projectdata names, and autocomplete and choose project[index] to open in project detail view

const projectData = parseJsonData(project)

export default function Projects() {
	const [opened1, setOpened1] = useState(false)
	const [data, setData] = useState(null)
	const [selectedProject, setSelectedProject] = useState<string | undefined>(undefined);

	const fetchData = async () => {
		try {
			const response = await fetch('/api/post')
			if (response.ok) {
				console.log(response)
				console.log('Fetched data')
			} else {
				console.error(`Error fetching data. Status: ${response.status}`)
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error('Error fetching project data:', error.message)
			} else {
				console.error('An unknown error occurred:', error)
			}
		}
	}

	const handleAutocompleteChange = (value: any) => {
		// Update the selected project when the Autocomplete value changes
		setSelectedProject(value)
	}

	const showProjectModal = () => {
		if (selectedProject) {
			const index = projectData.findIndex(
				(project: any) => project.title === selectedProject,
			)
			if (index !== -1) {
				// The project was found in projectData, and its index is stored in the 'index' variable
				console.log(`Selected project index: ${index}`)
				setOpened1(true)
				setData(projectData[index])
				// You can do whatever you want with the index, for example, open a modal with project details
				// For now, I'll just log the project details
				console.log(projectData[index])
			} else {
				// The project was not found in projectData
				console.warn('Selected project not found in projectData')
			}
		} else {
			// Handle the case where no project is selected
			console.warn('No project selected')
		}
	}

	const closeProjectModal = () => {
		setOpened1(false);
	};

	return (
		<Page>
			<div>
				<Group>
					<Autocomplete
						data={projectData.map((project: any) => project.title)} // Use project names for autocomplete suggestions
						radius='xl'
						size='md'
						placeholder='Search Projects..'
						value={selectedProject}
						onChange={handleAutocompleteChange}
						limit={5}
						leftSection={
							<IconSearch
								style={{ width: '18px', height: '18px' }}
								stroke={1.5}
							/>
						}
					/>
					<ActionIcon color='gray' onClick={showProjectModal}>
						<IconArrowRight></IconArrowRight>
					</ActionIcon>
				</Group>
			</div>
			<div>
				<Modal
					opened={opened1}
					onClose={closeProjectModal}
					withCloseButton={true}
					size='100%'
				>
					{data && <ProjectDetails data={data} />}
				</Modal>
			</div>
			<br></br>
			<div>
				<Button
					onClick={fetchData}
					variant='outline'
					rightSection={<IconRefresh size={14} />}
				>
					Refresh
				</Button>
			</div>
			<br></br>
			<div>
				<h1 className='font-bold text-2xl'>Latest Projects</h1>
				<br></br>
			</div>
			<div>
				<CarouselComponent data={projectData} />
			</div>
			<br></br>
			<div>
				<h1 className='font-bold text-2xl'>100% Express Commision</h1>
			</div>
			<br></br>
			<div>
				<CarouselComponent data={projectData} />
			</div>
		</Page>
	)
}
