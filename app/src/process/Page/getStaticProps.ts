import { GetStaticPaths, GetStaticProps } from 'next';
import { getPagesPath, getPageData } from '../../../sanity/satiny-utils';

export const getStaticPaths: GetStaticPaths = async () => {
  const pagesPath = await getPagesPath();
  const paths = pagesPath.map((p) => ({
    params: { page: p.slug as string },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = await getPageData(params?.page as string);

  return {
    props: { page },
  };
};
