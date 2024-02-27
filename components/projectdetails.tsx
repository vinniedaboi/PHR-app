
import { IconBed, IconCar, IconHeart, IconHome, IconBath } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, Center, Collapse, Divider, Modal, Stack, Space , List, ThemeIcon, rem  } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../styles/BadgeCard.module.css';
import { Carousel } from '@mantine/carousel';
import ImageCarousel from './imagecarousel';
import { IconCheck } from '@tabler/icons-react';

// this will be what the agent sees when they click on project details

// currently working on sizing image to not be too big.

export function ProjectDetails({ data }) {
  const { previewimage, title, description, location, specification, developer, images, price, slogan, completiondate, holdtype } = data;

  const features = specification.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text className={classes.label} size="xs">
        {feature.label}
      </Text>
    </Center>
  ));

  const [opened, { toggle }] = useDisclosure(false);

  const [opened1, { open, close }] = useDisclosure(false);

  return (
    <Card bg="black" radius="md" p="md" className={classes.card} withBorder>
      <Card.Section>
        <ImageCarousel images={images}></ImageCarousel>
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group>
          <Text className={classes.badge} fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm" variant="light">
            {location}
          </Badge>
        </Group>
        <Space h="xs" />
        <Stack gap={"xs"}>
          <Text size='lg' fw={700}>
            by {developer}
          </Text>
          <Text>
            From {price}
          </Text>
          <Text>
            Completing {completiondate}
          </Text>
          <Text>
            {holdtype} project
          </Text>
        </Stack>
        <Text className={classes.text} fz="sm" mt="xs">
          &ldquo;{slogan}&ldquo;
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
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
            spacing="md"
            size="sm"
            center
            icon={
              <ThemeIcon size={24} radius="xl">
                <IconCheck style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            <List.Item>Clone or download repository from GitHub</List.Item>
            <List.Item>Install dependencies with yarn</List.Item>
            <List.Item>To start development server run npm start command</List.Item>
            <List.Item>Run tests to make sure your changes do not break the build</List.Item>
          </List>
        </Stack>
      </Card.Section>

      <Group mt="xs">
        <Button bg="blue" radius="md" style={{ flex: 1 }}>
          Start selling
        </Button>
      </Group>
    </Card>
  );
}
