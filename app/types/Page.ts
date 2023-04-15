import { PortableTextBlock } from 'sanity';

export type Page = {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  content: PortableTextBlock[];
  image: PageImage;
  alt?: string;
  caption?: string;
  title: string;
  slug: PageSlug | string;
};

export type PageImage = {
  _type: string;
  alt: string;
  asset: PageImageAsset;
  caption: string;
};

export type PageImageAsset = {
  _ref: string;
  _type: string;
};

export type PageSlug = {
  _type: string;
  current: string;
};
