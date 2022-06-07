import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';

const styles = css`
  nav {
    top: 0;
    position: fixed;
    width: 100%;
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;
    padding: 1rem 2rem;
    background: white;
    border-bottom: 1px solid var(--border-color);
  }
  nav :global(a) {
    text-decoration: none;
  }
  section {
    display: flex;
    gap: 1rem;
    padding: 0;
  }
`;

type Props = {
  children: React.ReactNode;
};

export const TopNav: React.FC<Props> = ({ children }) => {
  return (
    <div css={styles}>
      <nav>
        <Link href="/" className="flex">
          Home
        </Link>
        <section>{children}</section>
      </nav>
    </div>
  );
};
