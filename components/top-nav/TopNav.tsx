import React from 'react';
import { css } from '@emotion/react';

import { BORDER_COLOR } from 'components/shared/styles';
import Logo from './Logo';

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
    border-bottom: 1px solid ${BORDER_COLOR};
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
  children?: React.ReactNode;
};

export const TopNav: React.FC<Props> = ({ children }) => {
  return (
    <div css={styles}>
      <nav>
        <Logo />
        {children && <section>{children}</section>}
      </nav>
    </div>
  );
};
