import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { Project } from 'types/Project';
import { Box, Container, Link as ExternalLink, Heading, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { urlFor } from '../../../sanity/helpers/image';

type ProjectProps = {
  project: Project;
};

const Project = ({ project }: ProjectProps) => {
  return (
    <Container>
      <Heading as="h1" size="lg">
        {project.name}
      </Heading>
      <Link href="/">
        <Text fontSize="lg" color="yellow.600">
          To Home
        </Text>
      </Link>
      <PortableText value={project.content} />
      <Box style={{ position: 'relative', height: '250px' }}>
        <Image
          src={urlFor(project.image).url()}
          alt={project.image.alt}
          placeholder="blur"
          blurDataURL={urlFor(project.image).url()}
          fill
        />
      </Box>
      <Box bg="blackAlpha.500" w="100%" p={4} color="white">
        <ExternalLink href={project.url} title="View Project Video" isExternal>
          To Video <ExternalLinkIcon mx="2px" />
        </ExternalLink>
      </Box>
    </Container>
  );
};

export default Project;
