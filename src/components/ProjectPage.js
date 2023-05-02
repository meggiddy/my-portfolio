import { myProjects } from "./ProjectList";
import { useParams } from "react-router-dom";
import { FaCalendarAlt, FaUserCircle } from "react-icons/fa";
import { FiLink, FiFolder } from "react-icons/fi";

function ProjectPage() {
  const { title } = useParams();
  const project = myProjects.find((p) => p.title === title);
  return (
    <div className="w-full">
      <div>
        <h1 className="font-serif flex justify-center text-5xl md:text-6xl mt-24 mb-24 md:pr-12">
          {project.title}
        </h1>
      </div>
      <div className="w-96 m-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-5">
            <img
              src={project.img}
              className="w-full max-w-md mx-auto md:max-w-none md:block"
              alt=""
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-2xl text-gray-600 mr-2" />
                  <div>
                    <h4 className="text-lg font-bold">Date</h4>
                    <p className="bg-gray-100 rounded-lg p-2">{project.date}</p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                <div className="flex items-center">
                  <FaUserCircle className="text-2xl text-gray-600 mr-2" />
                  <div>
                    <h4 className="text-lg font-bold">Client</h4>
                    <p className="bg-gray-100 rounded-lg p-2">
                      {project.client}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                <div className="flex items-center">
                  <FiFolder className="text-2xl text-gray-600 mr-2" />
                  <div>
                    <h4 className="text-lg font-bold">Categories</h4>
                    {project.categories.map((category) => (
                      <p
                        className="bg-gray-100 rounded-lg mb-2 p-2"
                        key={category}
                      >
                        {category}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                <div className="flex items-center">
                  <FiLink className="text-2xl text-gray-600 mr-2" />
                  <div>
                    <h4 className="text-lg font-bold">Project Demo</h4>
                    <p className="bg-gray-100 rounded-lg p-2">
                      <a href={project.demoLink}>{project.demoLink}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
          <div className="content">
            <h4 className="font-serif flex my-6 font-bold text-xl">
              Project Description
            </h4>
            <p>{project.description}</p>
            <h4 className="font-serif flex my-6 font-bold text-xl">
              Project Repo
            </h4>
            <div className="mb-10">
              <a href={project.repoLink}>
                <p className="p-5 bg-white/50 w-48 justify-center rounded hover:bg-white">GitHub Repo</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectPage;
