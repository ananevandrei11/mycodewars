import imageUrlBuilder from '@sanity/image-url';
import { client } from '../config/client-config';

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
