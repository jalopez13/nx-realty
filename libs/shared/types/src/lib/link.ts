export interface ILink {
  href: string;
  children: React.ReactNode;
  classes?: string;
  passHref?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
}
