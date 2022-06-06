import React, { useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import Prism from 'prismjs';

const styles = css`
  position: relative;
`;

type Props = {
  children: React.ReactNode;
  language: string;
};

export const CodeBlock: React.FC<Props> = ({ children, language }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current, false);
    }
  }, [children]);

  return (
    <div css={styles} className="code" aria-live="polite">
      <pre ref={ref} className={`language-${language}`}>
        {children}
      </pre>
    </div>
  );
};
