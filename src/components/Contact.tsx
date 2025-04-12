import { FC } from 'react';
import { Button } from '@/components/Button.tsx';
import { email } from '../variables.ts';

const Contact: FC = () => {
  return (
    <section id="contact" className="flex text-center justify-evenly mt-40">
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
