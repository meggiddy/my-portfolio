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
        className="w-full m-4 rounded-lg object-cover object-center"
        src={project.img}
        alt="To Do List"
      ></img>
      {showButton && (
          <button className="bg-white text-black px-4 py-2 rounded">
            View Project
          </button>
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

      <div className="flex grid-cols-3 gap-4 justify-center mr-8">
        {myProjects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
