import Page from '@/components/page'
import Section from '@/components/section'
import { ProjectPreview } from '@/components/ProjectPreview'
import {
	IconBed,
	IconCar,
	IconHeart,
	IconHome,
	IconBath,
	IconHome2,
	IconRefresh,
} from '@tabler/icons-react'
import { Button, Group } from '@mantine/core'
import { CarouselSlide } from '@mantine/carousel'
import { Carousel } from '@mantine/carousel'
import { InputWithButton } from '@/components/searchbar'
import classes from '../styles/Carousel.module.css'
import CarouselComponent from '@/components/projectpreviewcarousel'
import { useEffect, useState } from 'react'
// figure out how to load data from database.
import project from '../projects.json'


const mapIconStringToObject = (iconString) => {
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
const parseJsonData = (jsonData) => {
	return jsonData.map((item) => ({
		previewimage: item.previewimage,
		title: item.title,
		location: item.location,
		description: item.description,
		specification: item.specification.map(({ label, icon }) => ({
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
		unitTypes: item.unitTypes
	}))
}

const projectData = parseJsonData(project);

export default function Projects() {
	const [projectDatas, setProjectData] = useState([])

	const fetchData = async () => {
		try {
			const response = await fetch('/api/post')
			if (response.ok) {
				const data = await response.json()
				setProjectData(data)
			} else {
				console.error(`Error fetching data. Status: ${response.status}`)
			}
		} catch (error) {
			console.error('Error fetching project data:', error.message)
		}
	}

	return (
		<Page>
			<div>
				<InputWithButton></InputWithButton>
			</div>
			<br></br>
			<div>
				<Button onClick={fetchData} variant='outline' rightSection={<IconRefresh size={14}/>}>
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
