import Icon from '../assets/github-logo.png';
import { FC } from 'react';

const Work: FC = () => {
  return (
    <section id="work" className="grid justify-items-center mt-30">
      <h3 className="pb-10">Check out my Github</h3>
      <a href="https://github.com/Unicornelia" target="_blank">
        <img className="h-15 w-15" src={Icon} alt="Github Icon" />
      </a>
    </section>
  );
};

export default Work;
