import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { TOP_NAV_HEIGHT_PIXELS, BORDER_COLOR } from './shared/styles';

const styles = css`
  nav {
    position: sticky;

    top: calc(2.5rem + ${TOP_NAV_HEIGHT_PIXELS}px);
    max-height: calc(100vh - ${TOP_NAV_HEIGHT_PIXELS}px);
    flex: 0 0 auto;
    align-self: flex-start;
    margin-bottom: 1rem;
    padding: 0.5rem 0 0;
    border-left: 1px solid ${BORDER_COLOR};
  }
  ul {
    margin: 0;
    padding: 0 1.5rem;
  }
  li {
    list-style-type: none;
    margin: 0 0 1rem;
  }
  li a {
    text-decoration: none;
  }
  li a:hover,
  li.active a {
    text-decoration: underline;
  }
  li.padded {
    padding-left: 1rem;
  }
`;

type Props = {
  toc: Array<Record<string, any>>;
};

export const TableOfContents: React.FC<Props> = ({ toc }) => {
  const items = toc.filter((item) => item.id && (item.level === 2 || item.level === 3));

  if (items.length <= 1) {
    return null;
  }

  return (
    <div css={styles}>
      <nav className="toc">
        <ul className="flex column">
          {items.map((item) => {
            const href = `#${item.id}`;
            const active = typeof window !== 'undefined' && window.location.hash === href;
            return (
              <li
                key={item.title}
                className={[active ? 'active' : undefined, item.level === 3 ? 'padded' : undefined]
                  .filter(Boolean)
                  .join(' ')}
              >
                <Link href={href} passHref>
                  <a>{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
