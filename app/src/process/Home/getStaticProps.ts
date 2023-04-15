import { getPages, getProjects } from '../../../sanity/satiny-utils';

export async function getStaticProps() {
  const projects = await getProjects();
  const pages = await getPages();

  return {
    props: { projects, pages },
  };
}
