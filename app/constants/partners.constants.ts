import taxi189Icon from '@/public/partners2/189-taxi.svg';
import adaIcon from '@/public/partners2/ada.png';
import agroupIcon from '@/public/partners2/agroup.png';
import arendaazIcon from '@/public/partners2/arendaaz.png';
import autoazIcon from '@/public/partners2/auto.az.svg';
import azercosmosIcon from '@/public/partners2/azercosmos.png';
import aznetIcon from '@/public/partners2/aznet.png';
import beeonlineIcon from '@/public/partners2/bee-online.png';
import bilgahBeachIcon from '@/public/partners2/bilgah-beach-hotel.png';
import binaazIcon from '@/public/partners2/bina.az.svg';
import boltFoodIcon from '@/public/partners2/bolt-food.svg';
import boltIcon from '@/public/partners2/bolt.svg';
import bakuOxfordSchoolIcon from '@/public/partners2/baku-oxford-school.png';
import britishCollegeIcon from '@/public/partners2/british-college.png';
import casposIcon from '@/public/partners2/caspos.png';
import chargeazIcon from '@/public/partners2/charge.az.svg';
import portbakuClubIcon from '@/public/partners2/port-baku-club.svg';
import codeAcademyIcon from '@/public/partners2/code-academy.png';
import connectIcon from '@/public/partners2/connect.png';
import dinamoHotelIcon from '@/public/partners2/dinamo-hotel.png';
import ekonomTaxiIcon from '@/public/partners2/ekonom-taxi.png';
import emirateCarsIcon from '@/public/partners2/emirate-cars.svg';
import europcarIcon from '@/public/partners2/europcar.svg';
import evpointIcon from '@/public/partners2/evpoint.png';
import fairmontIcon from '@/public/partners2/fairmont-baku.png';
import fsoClubIcon from '@/public/partners2/fso-club.png';
import galaaltiIcon from '@/public/partners2/qalaalti.png';
import healthBakuIcon from '@/public/partners2/health-baku.png';
import hiltonIcon from '@/public/partners2/hilton.svg';
import kontaktIcon from '@/public/partners2/kontakt.png';
import kralInsaatIcon from '@/public/partners2/kral.png';
import mediClubIcon from '@/public/partners2/medi-club.png';
import merchantBakuIcon from '@/public/partners2/merchant-baku.svg';
import nikkiBeachIcon from '@/public/partners2/nikki-beach.png';
import olimpHospitalIcon from '@/public/partners2/olimp-hospital.png';
import portbakuIcon from '@/public/partners2/port-baku.svg';
import push30Icon from '@/public/partners2/push30.svg';
import rentbutikIcon from '@/public/partners2/rentbutik.svg';
import riverInnIcon from '@/public/partners2/river-inn.png';
import seaBreezeIcon from '@/public/partners2/sea-breeze.png';
import tapazIcon from '@/public/partners2/tap.az.svg';
import tokautoIcon from '@/public/partners2/tokauto.svg';
import turboazIcon from '@/public/partners2/turbo.az.svg';
import uberIcon from '@/public/partners2/uber.svg';
import wepowerIcon from '@/public/partners2/wepower.png';
import wingzIcon from '@/public/partners2/wingz.svg';
import woltIcon from '@/public/partners2/wolt.svg';
import worldclassIcon from '@/public/partners2/worldclass.png';
import yangoIcon from '@/public/partners2/yango.svg';
import yengiceIcon from '@/public/partners2/yengice.png';
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
    category: PartnerCategory.HOSPITAL,
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
    category: PartnerCategory.HOSPITAL,
    logo: codeAcademyIcon,
    color: '#E9E9E9'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: adaIcon,
    color: '#EFEFEF'
  },
  {
    category: PartnerCategory.MOBILITY,
    logo: chargeazIcon,
    color: '#2B2B2B'
  },
  {
    category: PartnerCategory.HOSPITAL,
    logo: britishCollegeIcon,
    color: '#EBF2F7'
  },
];