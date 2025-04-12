import { ReactNode } from 'react';
import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4 justify-items-center text-center">{children}</main>
      <Footer />
    </div>
  );
}
