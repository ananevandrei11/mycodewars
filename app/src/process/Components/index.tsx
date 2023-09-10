import { Container, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { NavProps } from "./types";

const Components = (props: NavProps) => {
  const { pages } = props;
  return (
    <Container maxW="8xl" as="section">
      <nav>
        <ul>
          {pages.map((p) => (
            <li key={p.slug}>
              <Link as={NextLink} href={`/components/${p.slug}`}>
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Components;
