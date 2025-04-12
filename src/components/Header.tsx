import { FC, ReactNode } from 'react';
import { navLinks } from '../variables.ts';
import TealK from '../assets/tealK.jpg';

type NavLink = {
  name: string;
  url: string;
};

export const Header: FC = () => {
  return (
    <header className="flex bg-dark-teal p-4">
      <nav className="flex justify-between relative text-center w-full">
        <a href="/">
          <img
            className="w-15 h-15 rounded-4xl"
            src={TealK}
            alt="Icon letter K in a colourful neon design"
          />
        </a>
        <ul className="flex justify-between list-none items-center">
          {navLinks.map(
            ({ url, name }: NavLink, i: number): ReactNode => (
              <li className="px-4" key={i}>
                <a href={url}>{name}</a>
              </li>
            ),
          )}
        </ul>
      </nav>
    </header>
  );
};
