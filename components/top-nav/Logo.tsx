import Link from 'next/link';
import { css } from '@emotion/react';

const styles = css`
  font-size: 24px;
  font-weight: bold;
  .link {
    color: rgba(0, 0, 0, 0.87);
    text-decoration: none;
  }
`;

const Logo = () => {
  return (
    <div css={styles}>
      <Link href="/docs">
        <a className="link" title="Bannerbox Docs">
          Bannerbox Docs
        </a>
      </Link>
    </div>
  );
};

export default Logo;
