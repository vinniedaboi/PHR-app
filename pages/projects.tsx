import Page from '@/components/page'
import Section from '@/components/section'
import { ProjectPreview } from '@/components/ProjectPreview'
import { IconBed, IconCar, IconHeart, IconHome, IconBath, IconHome2 } from '@tabler/icons-react';
import { Group } from '@mantine/core';
import { CarouselSlide } from '@mantine/carousel';
import { Carousel } from '@mantine/carousel';
import { InputWithButton } from '@/components/searchbar';
import classes from '../styles/Carousel.module.css'
import CarouselComponent from '@/components/projectpreviewcarousel';

const data1 = {
	previewimage:
		'http://powerhomerealty27.com/wp-content/uploads/2023/09/Ayanna-BukitJalil-Gallery2.png',
	title: 'Ayanna',
	location: 'Bukit Jalil',
	description:
		'Ayanna Resort Residences offers an extensive array of world-class facilities, including a sprawling 1.3-acre recreational park. This lush green space is inspired by nature and provides a serene oasis for residents to unwind and connect with the outdoors. Live a life well connected at Bukit Jalil.',
	specification: [
		{ label: '3 Bedrooms', icon: IconBed },
		{ label: '2 Bathrooms', icon: IconBath },
		{ label: '1115 sqft', icon: IconHome },
		{ label: '1 Parking Spot', icon: IconCar },
		{ label: 'RM880 per SQFT', icon: IconHome2},
	],

	images: [
		'https://powerhomerealty27.com/wp-content/uploads/2023/09/Ayanna-BukitJalil-Gallery3.png',
		'https://powerhomerealty27.com/wp-content/uploads/2023/09/Ayanna-BukitJalil-Gallery4.png',
	],

	developer: "Chin Hin Property Developer",
	price: "RM 800K*",
	slogan: "Experience Luxury Living at the Heart of the City",
	completiondate: "Q3 2027",
	holdtype: "Freehold",

	reasonsforsale: [
		'Prime Location',
		'Go anywhere with 3 Major Highways',
		'MRT walking distance',
		'Shopping Mall in short drive distance',
		'Many facilities',
	]
};

const data2 = {
	previewimage:
		'https://powerhomerealty27.com/wp-content/uploads/2023/06/AVENUEK.jpg',
	title: 'Kyliez Suite',
	location: 'KLCC, KL',
	description:
		'Introducing Kyliez Suite, an extraordinary KLCC Tier 1 Project, harmoniously blending opulence with its iconic surroundings. With rare freehold status, it embodies exclusivity in the world of real estate. Choose from meticulously curated layouts designed to cater to diverse desires. Immerse yourself in luxury, near renowned shopping destinations that fulfill every whim. Experience the unrivaled living you deserve, where sophistication and convenience intertwine.',
	specification: [
		{ label: '2 Bedrooms', icon: IconBed },
		{ label: '2 Bathrooms', icon: IconBath },
		{ label: '650 sqft', icon: IconHome },
		{ label: '1 Parking Spot', icon: IconCar },
		{ label: 'RM880 per SQFT', icon: IconHome2},
	],

	images: [
		'https://powerhomerealty27.com/wp-content/uploads/2023/09/Ayanna-BukitJalil-Gallery3.png',
		'https://powerhomerealty27.com/wp-content/uploads/2023/09/Ayanna-BukitJalil-Gallery4.png',
	],

	developer: "Chin Hin Property Developer",
	price: "RM 750K*",
	slogan: "Experience Luxury Living at the Heart of the City",
	completiondate: "Q3 2027",
	holdtype: "Leasehold",

	reasonsforsale: [
		'Prime Location',
		'Go anywhere with 3 Major Highways',
		'MRT walking distance',
		'Shopping Mall in short drive distance',
		'Many facilities',
	]

};

const projectData = [data1, data2];

const Projects = () => (
	<Page>
		<div>
			<InputWithButton></InputWithButton>
		</div>
		<br></br>
		<div>
			<h1 className='font-bold text-2xl'>Latest Projects</h1>
			<br></br>
		</div>
		<div>
			<CarouselComponent data={projectData}/>
		</div>
		<br></br>
		<div>
			<h1 className='font-bold text-2xl'>100% Express Commision</h1>
		</div>
		<br></br>
		<div>
			<CarouselComponent data={projectData}/>
		</div>
	</Page>
)

export default Projects
