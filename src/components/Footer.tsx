import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-dark-teal text-center p-4 items-center">
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
};
