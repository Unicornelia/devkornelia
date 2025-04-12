import { FC } from 'react';
import dayjs from 'dayjs';
import { skills } from '../variables.ts';

const Skills: FC = () => {
  const today = dayjs().year();
  return (
    <section className="mt-40 pr-100 pl-100">
      <p>Some technologies I’ve been working with over the last {today - 2018} years:</p>
      <ul className="grid grid-cols-2 gap-0.5 mt-10">
        {skills &&
          skills.map((skill: string, i: number) => (
            <li className="before:content-['➢'] before:text-green before:p-2" key={i}>
              {skill}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Skills;
