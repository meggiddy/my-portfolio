import { myProjects } from "./ProjectList";
import { Link } from "react-router-dom";

function Project({ project }) {
  return (
    <div className="col-lg-4 col-6 mb-4 shuffle-item shuffle-item--visible">
      <div className=" flex flex-wrap relative rounded hover-wrapper">
      {/*<div class="row shuffle-wrapper shuffle" style="position: relative; overflow: hidden; height: 996.781px; transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;"></div> */}
        <img
          src={project.img}
          alt=""
          className="h-auto rounded w-80 block object-cover"
          onMouseEnter={(e) => {
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
        <label className="px-10 bg-slate-400/50 rounded-full">React Native</label>
        <label className="px-10 bg-slate-400/50 rounded-full">PhaserJS</label>
        <label className="px-10 bg-slate-400/50 rounded-full">Game Development</label>
        <label className="px-10 bg-slate-400/50 rounded-full">C</label>
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
