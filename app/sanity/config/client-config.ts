import sanityClient from '@sanity/client';
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const clientConfig = {
  projectId: projectId,
  dataset: 'production',
  apiVersion: '2023-04-06',
};

export const client = sanityClient(clientConfig);
