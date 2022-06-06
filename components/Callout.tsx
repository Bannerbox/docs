import { css } from '@emotion/react';

const styles = css`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  background: #f6f9fc;
  border: 1px solid #dce6e9;
  border-radius: 4px;
  p {
    margin: 0;
  }
`;

type Props = {
  title: string;
  children: React.ReactNode;
};

const Callout: React.FC<Props> = ({ title, children }) => {
  return (
    <div css={styles} className="callout">
      <strong>{title}</strong>
      <span>{children}</span>
    </div>
  );
};

export default Callout;
