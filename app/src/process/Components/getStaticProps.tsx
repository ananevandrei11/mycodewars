import { GetStaticProps } from "next";
import { NavProps } from "./types";
import { Pages } from "./constants";

export const getStaticProps: GetStaticProps<NavProps> = async () => {
  const pages = Pages;

  return {
    props: { pages },
  };
};
