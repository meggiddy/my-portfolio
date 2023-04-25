import { useState } from "react";
import { myProjects } from "./ProjectList";

function Project({ project }) {
  const [showButton, setShowButton] = useState(false);

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  return (
    <div
      className="mt-10 relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="w-96 m-4 rounded-lg"
        src={project.img}
        alt="To Do List"
      ></img>
      {showButton && (
        <div className="absolute top-0 w-full h-full rounded-lg bg-white/50 flex items-center justify-center">
          <button className="bg-white text-black px-4 py-2 rounded">
            View Project
          </button>
        </div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <>
      <h1 className="font-serif flex justify-center text-6xl md:text-6xl mt-40 mb-32 md:pr-12">
        Projects
      </h1>
      <div className="flex flex-row gap-4 justify-center">
        <label className="px-10 bg-slate-400/50 rounded-full">All</label>
        <label className="px-10 bg-slate-400/50 rounded-full">React</label>
        <label className="px-10 bg-slate-400/50 rounded-full">Ruby</label>
        <label className="px-10 bg-slate-400/50 rounded-full">Rails</label>
      </div>

      <div className="flex gap-4 justify-center mr-8">
        {myProjects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
