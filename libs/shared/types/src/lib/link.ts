import { ReactNode } from 'react';

export interface ILink {
  href: string;
  children: ReactNode;
  classes?: string;
  passHref?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
}
