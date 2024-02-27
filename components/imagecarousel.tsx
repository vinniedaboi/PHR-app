import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import classes from '../styles/Carousel.module.css'

const ImageCarousel = ({ images }) => {

    return (
        <Carousel classNames={classes} slideGap="md">
            {images.map((images) => (
                <Carousel.Slide key={images}>
                    <Image src={images} alt='Display image' />
                </Carousel.Slide>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
