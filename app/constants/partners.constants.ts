import taxi189Icon from '@/public/partners/189-taxi.svg';
import adaIcon from '@/public/partners/ada.png';
import agroupIcon from '@/public/partners/agroup.png';
import arendaazIcon from '@/public/partners/arendaaz.png';
import autoazIcon from '@/public/partners/auto.az.svg';
import azercosmosIcon from '@/public/partners/azercosmos.svg';
import aznetIcon from '@/public/partners/aznet.png';
import beeonlineIcon from '@/public/partners/bee-online.png';
import bilgahBeachIcon from '@/public/partners/bilgah-beach-hotel.png';
import binaazIcon from '@/public/partners/bina.az.svg';
import boltFoodIcon from '@/public/partners/bolt-food.svg';
import boltIcon from '@/public/partners/bolt.svg';
import bakuOxfordSchoolIcon from '@/public/partners/baku-oxford-school.png';
import britishCollegeIcon from '@/public/partners/british-college.png';
import casposIcon from '@/public/partners/caspos.png';
import chargeazIcon from '@/public/partners/charge.az.svg';
import portbakuClubIcon from '@/public/partners/port-baku-club.svg';
import codeAcademyIcon from '@/public/partners/code-academy.png';
import connectIcon from '@/public/partners/connect.png';
import dinamoHotelIcon from '@/public/partners/dinamo-hotel.png';
import ekonomTaxiIcon from '@/public/partners/ekonom-taxi.png';
import emirateCarsIcon from '@/public/partners/emirate-cars.svg';
import europcarIcon from '@/public/partners/europcar.svg';
import evpointIcon from '@/public/partners/evpoint.png';
import fairmontIcon from '@/public/partners/fairmont-baku.png';
import fsoClubIcon from '@/public/partners/fso-club.png';
import galaaltiIcon from '@/public/partners/qalaalti.png';
import healthBakuIcon from '@/public/partners/health-baku.png';
import hiltonIcon from '@/public/partners/hilton.svg';
import kontaktIcon from '@/public/partners/kontakt.png';
import kralInsaatIcon from '@/public/partners/kral.png';
import mediClubIcon from '@/public/partners/medi-club.png';
import merchantBakuIcon from '@/public/partners/merchant-baku.svg';
import nikkiBeachIcon from '@/public/partners/nikki-beach.png';
import olimpHospitalIcon from '@/public/partners/olimp-hospital.png';
import portbakuIcon from '@/public/partners/port-baku.svg';
import push30Icon from '@/public/partners/push30.svg';
import rentbutikIcon from '@/public/partners/rentbutik.svg';
import riverInnIcon from '@/public/partners/river-inn.png';
import seaBreezeIcon from '@/public/partners/sea-breeze.png';
import tapazIcon from '@/public/partners/tap.az.svg';
import tokautoIcon from '@/public/partners/tokauto.svg';
import turboazIcon from '@/public/partners/turbo.az.svg';
import uberIcon from '@/public/partners/uber.svg';
import wepowerIcon from '@/public/partners/wepower.png';
import wingzIcon from '@/public/partners/wingz.svg';
import woltIcon from '@/public/partners/wolt.svg';
import worldclassIcon from '@/public/partners/worldclass.png';
import yangoIcon from '@/public/partners/yango.svg';
import yengiceIcon from '@/public/partners/yengice.png';
import { IPartner, PartnerCategory } from '../models/partners.models';

export const partnerLogos = [
  taxi189Icon, adaIcon, agroupIcon, arendaazIcon, autoazIcon, 
  azercosmosIcon, aznetIcon, beeonlineIcon, bilgahBeachIcon, 
  binaazIcon, boltFoodIcon, boltIcon, bakuOxfordSchoolIcon, britishCollegeIcon, 
  casposIcon, chargeazIcon, portbakuClubIcon, codeAcademyIcon, 
  connectIcon, dinamoHotelIcon, ekonomTaxiIcon, emirateCarsIcon, 
  europcarIcon, evpointIcon, fairmontIcon, fsoClubIcon, galaaltiIcon, 
  healthBakuIcon, hiltonIcon, kontaktIcon, kralInsaatIcon, mediClubIcon, 
  merchantBakuIcon, nikkiBeachIcon, olimpHospitalIcon, portbakuIcon, 
  push30Icon, rentbutikIcon, riverInnIcon, seaBreezeIcon, tapazIcon, 
  tokautoIcon, turboazIcon, uberIcon, wepowerIcon, wingzIcon, woltIcon, 
  worldclassIcon, yangoIcon, yengiceIcon
];

export const partners: IPartner[] = [
  {
    category: PartnerCategory.HOSPITAL,
    logo: fairmontIcon,
    color: '#000000'
  },
  {
    category: PartnerCategory.DELIVERY,
    logo: boltFoodIcon,
    color: '#2F313F'
  },
  {
    category: PartnerCategory.DELIVERY,
    logo: woltIcon,
    color: '#00C2E8'
  },
  {
    category: PartnerCategory.MARKETPLACE,
    logo: turboazIcon,
    color: '#D8181F'
  },
  {
    category: PartnerCategory.MARKETPLACE,
    logo: binaazIcon,
    color: '#8B7036'
  },
  {
    category: PartnerCategory.MARKETPLACE,
    logo: tapazIcon,
    color: '#FF4F08'
  },
  {
    category: PartnerCategory.MARKETPLACE,
    logo: autoazIcon,
    color: '#1A1A1A'
  },
  {
    category: PartnerCategory.MOBILITY,
    logo: yangoIcon,
    color: '#FF0000'
  },
  {
    category: PartnerCategory.MOBILITY,
    logo: wingzIcon,
    color: '#FFF34C'
  },
  {
    category: PartnerCategory.MOBILITY,
    logo: boltIcon,
    color: '#34D186'
  },
  {
    category: PartnerCategory.MOBILITY,
    logo: uberIcon,
    color: '#010202'
  },
  {
    category: PartnerCategory.MOBILITY,
    logo: ekonomTaxiIcon,
    color: '#3C264C'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: portbakuIcon,
    color: '#F6F3E5'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: merchantBakuIcon,
    color: '#F6F4EF'
  },
  {
    category: PartnerCategory.MOBILITY,
    logo: europcarIcon,
    color: '#0E8102'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: portbakuClubIcon,
    color: '#F6F3E5'
  },
  {
    category: PartnerCategory.MOBILITY,
    logo: emirateCarsIcon,
    color: '#EAF4EF'
  },
  {
    category: PartnerCategory.MOBILITY,
    logo: tokautoIcon,
    color: '#E1F1E4'
  },
  {
    category: PartnerCategory.ALL,
    logo: bakuOxfordSchoolIcon,
    color: '#E16265'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: fsoClubIcon,
    color: '#2F2E34'
  },
  {
    category: PartnerCategory.MOBILITY,
    logo: rentbutikIcon,
    color: '#DCA800'
  },
  {
    category: PartnerCategory.MOBILITY,
    logo: wepowerIcon,
    color: '#E7F6F9'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: olimpHospitalIcon,
    color: '#FFEFE5'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: bilgahBeachIcon,
    color: '#EFF2F5'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: nikkiBeachIcon,
    color: '#EEF5F8'
  },
  {
    category: PartnerCategory.MOBILITY,
    logo: taxi189Icon,
    color: '#58595B'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: riverInnIcon,
    color: '#C0FFCA'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: healthBakuIcon,
    color: '#FDEFF3'
  },
  {
    category: PartnerCategory.CONSUMER_GOODS,
    logo: aznetIcon,
    color: '#E9F3F1'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: mediClubIcon,
    color: '#FFF4E0'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: galaaltiIcon,
    color: '#FFF4E0'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: seaBreezeIcon,
    color: '#9EE3D7'
  },
  {
    category: PartnerCategory.CONSUMER_GOODS,
    logo: beeonlineIcon,
    color: '#2F2822'
  },
  {
    category: PartnerCategory.MOBILITY,
    logo: push30Icon,
    color: '#152A2A'
  },
  {
    category: PartnerCategory.CONSUMER_GOODS,
    logo: connectIcon,
    color: '#F0ECEC'
  },
  {
    category: PartnerCategory.CONSUMER_GOODS,
    logo: casposIcon,
    color: '#264990'
  },
  {
    category: PartnerCategory.CONSUMER_GOODS,
    logo: kontaktIcon,
    color: '#F2F2F2'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: azercosmosIcon,
    color: '#E8EBEE'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: yengiceIcon,
    color: '#EEFBE3'
  },
  {
    category: PartnerCategory.MOBILITY,
    logo: evpointIcon,
    color: '#071323'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: hiltonIcon,
    color: '#1E4A6E'
  },
  {
    category: PartnerCategory.MARKETPLACE,
    logo: arendaazIcon,
    color: '#D8181F'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: dinamoHotelIcon,
    color: '#EBEEED'
  },
  {
    category: PartnerCategory.CONSUMER_GOODS,
    logo: agroupIcon,
    color: '#F1EBEB'
  },
  {
    category: PartnerCategory.CONSUMER_GOODS,
    logo: kralInsaatIcon,
    color: '#020027'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: worldclassIcon,
    color: '#EB3831'
  },
  {
    category: PartnerCategory.ALL,
    logo: codeAcademyIcon,
    color: '#E9E9E9'
  },
  {
    category: PartnerCategory.ALL,
    logo: adaIcon,
    color: '#EFEFEF'
  },
  {
    category: PartnerCategory.MOBILITY,
    logo: chargeazIcon,
    color: '#2B2B2B'
  },
  {
    category: PartnerCategory.ALL,
    logo: britishCollegeIcon,
    color: '#EBF2F7'
  },
];