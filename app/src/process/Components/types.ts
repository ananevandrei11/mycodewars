import { ParsedUrlQuery } from "querystring";

export interface PageParams extends ParsedUrlQuery {
  slug: string;
}

export interface PageData {
  slug: string;
  name: string;
}

export interface PageProps {
  page: PageData;
}

export interface NavProps {
  pages: PageData[];
}
