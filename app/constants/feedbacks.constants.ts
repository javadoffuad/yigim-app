import bolt from '@/public/partners/bolt.svg';
import wolt from '@/public/partners/wolt.svg';
import yango from '@/public/partners/yango.svg';
import turboaz from '@/public/partners/turbo.az.svg';
import uber from '@/public/partners/uber.svg';
import wingz from '@/public/partners/wingz.svg';
import hilton from '@/public/partners/hilton.svg';
import tapaz from '@/public/partners/tap.az.svg';
import push30 from '@/public/partners/push30.svg';
import { IFeedback } from '../models/feedback.models';

const feedbackBolt: IFeedback = {
  brand: {
    icon: bolt,
    color: '#34D186',
  },
  author: 'Naim Azizov',
  feedback: "YIĞIM's tailor-made payment processing solutions have been transformative for BOLT Azerbaijan, enhancing efficiency and customer satisfaction.",
  position: 'General Manager Bolt Azerbaijan'
};

const feedbackWolt: IFeedback = {
  brand: {
    icon: wolt,
    color: '#00C2E8',
  },
  author: 'Tofik Suleymanov',
  feedback: 'YIĞIM truly understands the unique needs of our business. Their collaborative approach and ability to tailor solutions specifically for WOLT Azerbaijan.',
  position: 'General Manager Wolt Azerbaijan'
};

const feedbackUber: IFeedback = {
  brand: {
    icon: uber,
    color: '#010202',
  },
  author: 'Mushvig Hasanov',
  feedback: "YIĞIM has a deep understanding of our specific business requirements. Their teamwork and tailored solutions have greatly benefited Uber Azerbaijan.",
  position: 'Regional Director - Uber'
};

const feedbackTurboaz: IFeedback = {
  brand: {
    icon: turboaz,
    color: '#D8181F',
  },
  author: 'Mamuka Kirvalidze',
  feedback: "YIĞIM's customized payment solutions have revolutionized operations for Turbo.az, enhancing efficiency and customer satisfaction.",
  position: 'CEO at Digital Classifieds'
};

const feedbackWingz: IFeedback = {
  brand: {
    icon: wingz,
    color: '#FFF34C',
  },
  author: 'Timur Muravyov',
  feedback: "I value partners who prioritize discretion and provide seamless service. YIĞIM's tailored payment solutions exemplify elegance and efficiency.",
  position: 'CEO Sakuraz Holding'
};

const feedbackHilton: IFeedback = {
  brand: {
    icon: hilton,
    color: '#1E4A6E',
  },
  author: 'Aykut Korkmaz',
  feedback: "I appreciate partners who understand discretion and seamless service. YIĞIM's bespoke payment solutions have been just that - elegant, efficient.",
  position: 'CEO Hilton Azerbaijan'
};

const feedbackTapaz: IFeedback = {
  brand: {
    icon: tapaz,
    color: '#FF4F08',
  },
  author: 'Mamuka Kirvalidze',
  feedback: "YIĞIM comprehends the distinct needs of our enterprise. Their cooperative strategy and bespoke solutions have been invaluable for Tap.az.",
  position: 'CEO at Digital Classifieds'
};

const feedbackYango: IFeedback = {
  brand: {
    icon: yango,
    color: '#FF0000',
  },
  author: 'Mushvig Hasanov',
  feedback: "I appreciate partners who prioritize discretion and deliver seamless service. Yango's tailored payment solutions have been elegant and efficient.",
  position: 'Regional Director - Yango'
};

const feedbackPush30: IFeedback = {
  brand: {
    icon: push30,
    color: '#152A2A',
  },
  author: 'Adil Gasimov',
  feedback: "YIĞIM's customized payment solutions have significantly improved Push30's operational capabilities.",
  position: 'CEO Push30'
};

export const FEEDBACKS1: IFeedback[] = [
  feedbackWolt,
  feedbackYango,
  feedbackBolt,
  feedbackTurboaz,
  feedbackHilton,
  feedbackWingz,
  feedbackUber,
  feedbackTapaz,
  feedbackPush30,
];
export const FEEDBACKS2: IFeedback[] = [
  feedbackTurboaz,
  feedbackWingz,
  feedbackTapaz,
  feedbackWolt,
  feedbackUber,
  feedbackYango,
  feedbackPush30,
  feedbackBolt,
  feedbackHilton,
];
export const FEEDBACKS3: IFeedback[] = [
  feedbackPush30,
  feedbackTapaz,
  feedbackUber,
  feedbackWolt,
  feedbackYango,
  feedbackBolt,
  feedbackHilton,
  feedbackWingz,
  feedbackTurboaz,
];