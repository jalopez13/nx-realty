/* eslint-disable jsx-a11y/anchor-is-valid */
import { ILink } from '@nx-realty/shared/types';
import NextLink from 'next/link';

export const Link = ({
  href,
  children,
  classes,
  passHref,
  target = '_self',
}: ILink) => {
  return (
    <NextLink key={href} href={href} passHref={passHref}>
      <a className={classes} target={target}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
