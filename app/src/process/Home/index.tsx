import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { Page } from "types/Page";
import { Project } from "types/Project";

type HomeProps = {
  projects: Project[];
  pages: Page[];
};

const Home = (props: HomeProps) => {
  const { projects, pages } = props;

  return (
    <main>
      <Container maxW="8xl" as="section">
        <Heading as="h1" size="lg">
          My Code Wars
        </Heading>
        {projects.map((p) => (
          <div key={p._id}>
            {p.image && (
              <Image
                boxSize="100px"
                objectFit="cover"
                src={String(p.image)}
                alt={p.alt}
              />
            )}

            <Link href={`/project/${p.slug}`}>
              <Text fontSize="lg" color="yellow.600">
                To {p.name}
              </Text>
            </Link>
          </div>
        ))}
        <Divider orientation="horizontal" />
        <footer>
          <Center>
            {pages.map((p) => (
              <Box key={p._id}>
                <Link
                  href={{
                    pathname: "/[...page]",
                    query: { page: p.slug as string },
                  }}
                >
                  <Text fontSize="lg" color="yellow.600">
                    To {p.title}
                  </Text>
                </Link>
              </Box>
            ))}
          </Center>
        </footer>
      </Container>
    </main>
  );
};

export default Home;
