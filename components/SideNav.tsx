import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { BORDER_COLOR, TOP_NAV_HEIGHT_PIXELS } from './shared/styles';

const styles = css`
  nav {
    position: sticky;
    top: ${TOP_NAV_HEIGHT_PIXELS}px;
    height: calc(100vh - ${TOP_NAV_HEIGHT_PIXELS}px);
    flex: 0 0 auto;
    overflow-y: auto;
    padding: 2.5rem 2rem 2rem;
    border-right: 1px solid ${BORDER_COLOR};
  }
  span {
    font-size: larger;
    font-weight: 500;
    padding: 0.5rem 0 0.5rem;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
    margin: 0;
    margin-bottom: 12px;
  }
  li a {
    text-decoration: none;
  }
  li a:hover,
  li.active > a {
    text-decoration: underline;
  }
`;

const items = [
  {
    title: 'Setup',
    links: [
      { href: '/install', children: 'Install' },
      { href: 'targetting', children: 'Targetting' },
    ],
  },
];

export const SideNav = () => {
  const router = useRouter();
  return (
    <div css={styles}>
      <nav className="sidenav">
        {items.map((item) => (
          <div key={item.title}>
            <span>{item.title}</span>
            <ul className="flex column">
              {item.links.map((link) => {
                const active = router.pathname === link.href;
                return (
                  <li key={link.href} className={active ? 'active' : ''}>
                    <Link {...link}>
                      <a href={link.href}>{link.children}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};
