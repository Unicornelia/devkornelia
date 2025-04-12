import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="flex bg-dark-teal text-center p-4">
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
};
