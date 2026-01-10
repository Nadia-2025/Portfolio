import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiPython, SiFlask, SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <section>
      <div>
        <h1>Stack </h1>
        <p>Herramientas y tecnologías con las que trabajo habitualmente</p>
        <div>
          <TechItem icon={<FaHtml5 />} label="HTML5" />
          <TechItem icon={<FaCss3Alt />} label="CSS3" />
          <TechItem icon={<FaJs />} label="JavaScript" />
          <TechItem icon={<FaReact />} label="React" />
          <TechItem icon={<SiTailwindcss />} label="Tailwind CSS" />
          <TechItem icon={<FaBootstrap />} label="Bootstrap" />
          <TechItem icon={<FaServer />} label="RESTful APIs" />
          <TechItem icon={<FaGitAlt />} label="Git" />
          <TechItem icon={<FaGithub />} label="GitHub" />
          <TechItem icon={<SiPython />} label="Python" />
          <TechItem icon={<SiPython />} label="Python" />
          <TechItem icon={<SiFlask />} label="Flask" />
          <TechItem icon={<FaDatabase />} label="SQL" />
          <TechItem icon={<SiMysql />} label="MySQL" />
        </div>
      </div>
    </section>
  );
};

export default Skills;

const TechItem = ({ icon, label }) => {
  return (
    <div>
      {icon}
      <span>{label}</span>
    </div>
  );
};
