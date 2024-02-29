import React from 'react';
import { Carousel } from '@mantine/carousel';
import { ProjectPreview } from './projectpreview';
import classes from '../styles/Carousel.module.css'
import { Flex } from '@mantine/core';

const CarouselComponent = ({ data }: any) => {

  return (
      <Carousel classNames={classes} withControls={false} slideGap="md">
        {data.map((item: any, index: any) => (
          <Carousel.Slide key={index}>
            <ProjectPreview data={item} />
          </Carousel.Slide>
        ))}
      </Carousel>
  );
};

export default CarouselComponent;
