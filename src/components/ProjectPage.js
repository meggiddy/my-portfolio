import { myProjects } from "./ProjectList";
import { useParams } from "react-router-dom";
import { FaCalendarAlt, FaUserCircle } from "react-icons/fa";
import { FiLink, FiFolder } from "react-icons/fi";

function ProjectPage() {
  const { title } = useParams();
  const project = myProjects.find((p) => p.title === title);
  return (
    <div>
      <div>
        <h1 className="font-serif flex justify-center text-6xl md:text-6xl mt-40 mb-32 md:pr-12">
          {project.title}
        </h1>
      </div>
      <div className="flex flex-col m-4">
        <div className="justify-center flex-1 flex flex-row gap-10">
          <div className="max-w-96 ml-4 w-full h-full ">
            <img className="w-full h-auto rounded" src={project.img} alt=""></img>
          </div>
          <div className="flex-row self-center gap-4">
            <div className="grid grid-cols-2 md:grid-col gap-6">
              <div className="mb-5">
                <div className="flex items-center">
                  <FaCalendarAlt className="rounded" />
                  <div className="ml-3">
                    <h4 className="font-bold text-lg">Date</h4>
                    <p className="bg-white/50 rounded-lg p-2">Mar 09, 2023</p>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex items-center">
                  <FaUserCircle className="rounded" />
                  <div className="ml-3">
                    <h4 className="font-bold text-lg">Client</h4>
                    <p className="bg-white/50 rounded-lg p-2">
                      {project.client}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex items-center">
                  <FiFolder className="rounded" />
                  <div className="ml-3">
                    <h4 className="font-bold text-lg">Categories</h4>
                    {project.categories.map((category) => (
                      <p className="bg-white/50 rounded-lg mb-2 p-2">
                        {category}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex items-center">
                  <FiLink className="rounded" />
                  <div className="ml-3">
                    <h4 className="font-bold text-lg">Project Demo</h4>
                    <p className="bg-white/50 rounded-lg p-2">
                      <a href="/">my link is here</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-4 mb-10">
          <h3 className="font-serif flex justify-center mb-2 font-bold text-xl md:text-xl">
            Project Description
          </h3>
          <div>{project.requirements}</div>
        </div>
      </div>
    </div>
  );
}
export default ProjectPage;
