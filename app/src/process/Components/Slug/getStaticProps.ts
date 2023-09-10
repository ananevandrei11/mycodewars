import { GetStaticPaths, GetStaticProps } from "next";
import { Pages } from "../constants";
import { PageParams, PageProps } from "../types";

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  const pagesPath = Pages;
  const paths = pagesPath.map((p) => ({
    params: { slug: p.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async ({
  params,
}) => {
  const pageDate = Pages.find((p) => p.slug === params?.slug);
  if (!pageDate) {
    return {
      notFound: true,
    };
  }

  return {
    props: { page: pageDate },
  };
};
