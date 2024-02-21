
import { IconBed, IconCar, IconHeart, IconHome, IconBath } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, Center, Collapse, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../styles/BadgeCard.module.css';

export function CustomCard({ data }) {
  const { image, title, description, location, specification } = data;

  const features = specification.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text className={classes.label} size="xs">
        {feature.label}
      </Text>
    </Center>
  ));

  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Card bg="black" radius="md" p="md" className={classes.card} withBorder>
      <Card.Section>
        <Image src={image} alt={title} height={120} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text className={classes.badge} fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm" variant="light">
            {location}
          </Badge>
        </Group>
        <Divider my="sm" variant="dashed" />
        <Button size="xs" bg="blue" onClick={toggle}>Read Description...</Button>
        <Collapse in={opened}>
        <Text className={classes.text} fz="sm" mt="xs">
          {description}
        </Text>
        </Collapse>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Specifications
        </Text>
        <Group gap={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button bg="blue" radius="md" style={{ flex: 1 }}>
          Project details
        </Button>
        <ActionIcon variant="default" radius="md" size={24}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
