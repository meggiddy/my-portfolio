import { myProjects } from "./ProjectList";
import { Link } from "react-router-dom";

function Project({ project }) {
  return (
    <div className="col-lg-4 col-6 mb-4 shuffle-item shuffle-item--visible">
      <div className="relative rounded hover-wrapper">
        <img
          src={project.img}
          alt=""
          className="rounded w-96 block" // opacity-0 transition-opacity duration-200
          onMouseEnter={(e) => {
            console.log(e.currentTarget);
            e.currentTarget.classList.add("opacity-100");
          }}
          onMouseLeave={(e) => {
            e.currentTarget.classList.remove("opacity-100");
          }}
        />
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
  return (
    <>
      <h1 className="font-serif flex justify-center text-6xl md:text-6xl mt-40 mb-32 md:pr-12">
        Projects
      </h1>
      <div className="flex flex-wrap flex-row gap-4 justify-center">
        <label className="px-10 bg-slate-400/50 rounded-full">All</label>
        <label className="px-10 bg-slate-400/50 rounded-full">React</label>
        <label className="px-10 bg-slate-400/50 rounded-full">Ruby</label>
        <label className="px-10 bg-slate-400/50 rounded-full">Rails</label>
        <label className="px-10 bg-slate-400/50 rounded-full">Figma</label>
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
