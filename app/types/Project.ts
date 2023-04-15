import { PortableTextBlock } from 'sanity';

export type Project = {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  content: PortableTextBlock[];
  image: ProjectImage;
  alt?: string;
  caption?: string;
  name: string;
  slug: ProjectSlug | string;
  url: string;
};

export type ProjectImage = {
  _type: string;
  alt: string;
  asset: ProjectImageAsset;
  caption: string;
}

export type ProjectImageAsset = {
  _ref: string;
  _type: string;
}

export type ProjectSlug = {
  _type: string;
  current: string;
}
