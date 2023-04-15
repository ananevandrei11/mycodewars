import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { Project } from 'types/Project';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { urlFor } from '../../../sanity/helpers/image';
import { Page } from 'types/Page';

type PageProps = {
  page: Page;
};

const Page = ({ page }: PageProps) => {
  return (
    <Container>
      <Heading as="h1" size="lg">
        {page.title}
      </Heading>
      <Link href="/">
        <Text fontSize="lg" color="yellow.600">
          To Home
        </Text>
      </Link>
      <PortableText value={page.content} />
      {page.image && (
        <Box style={{ position: 'relative', height: '250px' }}>
          <Image
            src={urlFor(page.image).url()}
            alt={page.image.alt}
            placeholder="blur"
            blurDataURL={urlFor(page.image).url()}
            fill
          />
        </Box>
      )}
    </Container>
  );
};

export default Page;
