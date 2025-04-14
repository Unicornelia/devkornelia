import { FC } from 'react';
import dayjs from 'dayjs';
import { skills } from '@/variables.ts';

const Skills: FC = () => {
  const today = dayjs().year();
  return (
    <section className="mt-20 sm:mt-10 md:mt-40">
      <p>Some technologies I’ve been working with over the last {today - 2018} years:</p>
      <ul className="inline-grid grid-cols-[repeat(2,_minmax(140px,_300px))] gap-1 mt-10 text-center justify-items-center">
        {skills &&
          skills.map((skill: string, i: number) => (
            <li className="before:content-['➢'] before:text-green before:p-2 hover:italic" key={i}>
              {skill}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Skills;
