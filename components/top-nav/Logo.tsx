import Link from 'next/link';
import { css } from '@emotion/react';
import { HOME_LINK } from 'components/shared/links';

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
      <Link href={HOME_LINK}>
        <a className="link" title="Bannerbox Docs">
          Bannerbox Docs
        </a>
      </Link>
    </div>
  );
};

export default Logo;
