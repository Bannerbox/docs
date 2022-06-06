import React from 'react';

type Props = {
  children: React.ReactNode;
  id: string;
  level: number;
  className: string;
};

export const Heading: React.FC<Props> = ({ id = '', level = 1, children, className }) => {
  return React.createElement(
    `h${level}`,
    {
      id,
      className: ['heading', className].filter(Boolean).join(' '),
    },
    children
  );
};
