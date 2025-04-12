import { FC } from 'react';

type ButtonProps = {
  text: string;
  onClick?: () => Window | null;
};

export const Button: FC<ButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};
