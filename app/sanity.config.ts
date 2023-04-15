import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemas } from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;

const config = defineConfig({
  title: 'my-code-wars',
  apiVersion: '2023-04-06',
  projectId,
  dataset: 'production',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});

export default config;