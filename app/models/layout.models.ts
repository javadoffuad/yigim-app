export interface ILayoutProps {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};