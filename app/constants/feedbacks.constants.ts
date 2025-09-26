import bolt from '@/public/partners/bolt.svg';
import wolt from '@/public/partners/wolt.svg';
import yango from '@/public/partners/yango.svg';
import turboaz from '@/public/partners/turbo.az.svg';
import uber from '@/public/partners/uber.svg';
import wingz from '@/public/partners/wingz.svg';
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
  feedback: 'YIĞIM truly understands...',
  position: 'General Manager Wolt Azerbaijan'
};

const feedbackUber: IFeedback = {
  brand: {
    icon: uber,
    color: '#010202',
  },
  author: 'Elvin Mammadov',
  feedback: "YIĞIM has a deep understanding of our specific business requirements. Their teamwork and tailored solutions have greatly benefited WOLT Azerbaijan.",
  position: 'Uber Azerbaijan'
};

const feedbackTurboaz: IFeedback = {
  brand: {
    icon: turboaz,
    color: '#D8181F',
  },
  author: 'Ramin Aliyev',
  feedback: "YIĞIM's customized payment solutions have revolutionized operations for BOLT Azerbaijan, enhancing efficiency and customer satisfaction.",
  position: 'Turbo.az'
};

const feedbackWingz: IFeedback = {
  brand: {
    icon: wingz,
    color: '#FFF34C',
  },
  author: 'Kamran Huseynov',
  feedback: "I value partners who prioritize discretion and provide seamless service. YIĞIM's tailored payment solutions exemplify elegance and efficiency.",
  position: 'CFO Hilton Azerbaijan'
};

const feedbackYango: IFeedback = {
  brand: {
    icon: yango,
    color: '#FF0000',
  },
  author: 'Ramiz Guliyev',
  feedback: "I appreciate partners who prioritize discretion and deliver seamless service. YIĞIM's tailored payment solutions have been elegant and efficient.",
  position: 'Yango'
};

export const FEEDBACKS1: IFeedback[] = [
  feedbackWolt,
  feedbackYango,
  feedbackUber,
  feedbackBolt,
  feedbackTurboaz,
  feedbackWolt,
  feedbackWingz,
  feedbackUber,
];
export const FEEDBACKS2: IFeedback[] = [
  feedbackWingz,
  feedbackTurboaz,
  feedbackUber,
  feedbackWolt,
  feedbackWingz,
  feedbackBolt,
  feedbackYango,
  feedbackUber,
];
export const FEEDBACKS3: IFeedback[] = [
  feedbackWingz,
  feedbackYango,
  feedbackTurboaz,
  feedbackUber,
  feedbackBolt,
  feedbackWingz,
  feedbackWolt,
  feedbackBolt,
  feedbackUber,
];