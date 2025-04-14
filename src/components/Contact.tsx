import { FC } from 'react';
import { Button } from '@/components/Button.tsx';
import { email } from '@/variables.ts';

const Contact: FC = () => {
  return (
    <section
      id="contact"
      className="inline-grid grid-cols-[repeat(2,_minmax(140px,_300px))] text-center justify-evenly mt-20 sm:mt-10 md:mt-40"
    >
      <a href="/resume.pdf" target="_blank">
        <Button text="Resume" />
      </a>
      <a href={`mailto:${email}`}>
        <Button text="Email" />
      </a>
    </section>
  );
};

export default Contact;
