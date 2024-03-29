import { createClient, groq } from 'next-sanity';
import { Project } from 'types/Project';
import { clientConfig } from './config/client-config';
import { Page } from 'types/Page';

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      url,
      content
    }`
  );
}

export async function getProjectsPath(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      "slug": slug.current
    }`
  );
}

export async function getProjectData(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]`,
    { slug: slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

export async function getPagesPath(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      "slug": slug.current
    }`
  );
}

export async function getPageData(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]`,
    { slug: slug }
  );
}
