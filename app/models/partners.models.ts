import { StaticImageData } from "next/image";

export enum PartnerCategory {
  MOBILITY,
  HOSPITAL,
  DELIVERY,
  CONSUMER_GOODS,
  MARKETPLACE,
}

export interface ICategory {
  code: PartnerCategory;
  name: string;
}

export interface IPartner {
  category: PartnerCategory;
  logo: StaticImageData;
  color: string;
}
