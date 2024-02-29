import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import classes from '../styles/ProjectDetails.module.css'

const ImageCarousel = ({ images} : any) => {

    return (
        <Carousel classNames={classes} slideGap="md" withControls={true}>
            {images.map((images: string) => (
                <Carousel.Slide key={images}>
                    <Image src={images} alt='Display image' />
                </Carousel.Slide>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
