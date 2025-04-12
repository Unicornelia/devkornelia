import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="flex bg-gray-800 text-white text-center p-4">
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
};
