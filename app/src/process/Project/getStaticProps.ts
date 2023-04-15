import { GetStaticPaths, GetStaticProps } from 'next';
import { getProjectData, getProjectsPath } from '../../../sanity/satiny-utils';

export const getStaticPaths: GetStaticPaths = async () => {
  const projectsPath = await getProjectsPath();
  const paths = projectsPath.map((p) => ({
    params: { slug: p.slug as string },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = await getProjectData(params?.slug as string);

  return {
    props: { project },
  };
};
