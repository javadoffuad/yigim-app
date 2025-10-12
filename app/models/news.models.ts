import { StaticImageData } from "next/image";

export interface INews {
  id: number | string;
  title: string;
  date: string;
  slug: string;
  image: StaticImageData;
}

export interface INewsDeatil {
  id: number | string;
  title: string;
  date: string;
  slug: string;
  text: string;
  images: StaticImageData[];
}

export interface NewsDetailResponse {
  news: INewsDeatil;
  relatedNews?: INews[];
}