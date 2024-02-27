import React from 'react';
import { Carousel } from '@mantine/carousel';
import { ProjectPreview } from './ProjectPreview';
import classes from '../styles/Carousel.module.css'
import { Flex } from '@mantine/core';

const CarouselComponent = ({ data }) => {

  return (
      <Carousel classNames={classes} slideGap="md">
        {data.map((item, index) => (
          <Carousel.Slide key={index}>
            <ProjectPreview data={item} />
          </Carousel.Slide>
        ))}
      </Carousel>
  );
};

export default CarouselComponent;
