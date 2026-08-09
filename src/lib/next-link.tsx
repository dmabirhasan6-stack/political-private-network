import React from 'react';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Link({ href, onClick, ...props }: Props) {
  const target = href.startsWith('/') ? `#${href}` : href;
  return (
    <a
      {...props}
      href={target}
      onClick={(e) => {
        if (href.startsWith('/')) {
          e.preventDefault();
          window.location.hash = href;
        }
        onClick?.(e);
      }}
    />
  );
}
