import { myProjects } from "./ProjectList";
import { Link } from "react-router-dom";

function Project({ project }) {
  return (
    <div className="col-lg-4 col-6 mb-4 shuffle-item shuffle-item--visible">
      <div className=" flex flex-wrap relative rounded hover-wrapper">
        <div
          className={"h-64 w-80 relative"}
          onMouseEnter={(e) => {
            e.currentTarget.classList.add("opacity-100");
          }}
          onMouseLeave={(e) => {
            e.currentTarget.classList.remove("opacity-100");
          }}
        >
          <img
            src={project.img}
            alt=""
            className="absolute top-0 left-0 min-w-full min-h-full object-cover"
          />
        </div>
        <div className="hover-overlay">
          <Link
            to={`/projects/${project.title}`}
            className="bg-white text-black px-4 py-2 rounded"
          >
            View Project
          </Link>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <h3 className="text-sm text-gray-700">{project.title}</h3>
      </div>
    </div>
  );
}

function Projects() {
  const filters = [
    "All",
    "React",
    "Ruby",
    "React Native",
    "PhaserJS",
    "Game Development",
    "C",
  ];

  return (
    <>
      <h1 className="font-serif flex justify-center text-6xl md:text-6xl mt-32 mb-24 md:pr-12">
        Projects
      </h1>
      <div className="flex pb-8 flex-wrap flex-row gap-4 justify-center">
        {filters.map((filter) => (
          <label key={filter} className="px-10 bg-slate-400/50 rounded-full">
            {filter}
          </label>
        ))}
        <hr className="my-2 border-white" />
      </div>
      
      <div className="flex flex-wrap mt-10 mx-4 gap-4 justify-center">
        {myProjects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
