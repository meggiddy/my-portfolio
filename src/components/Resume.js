import { FaBriefcase } from "react-icons/fa";

function Resume() {
  return (
    <>
      <div>
        {/* Header section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Maggie Muriithi</h1>
          <p className="text-lg">Malindi, Kilifi County, Kenya</p>
          <p className="text-lg">mimamitchelle@gmail.com</p>
          <p className="text-lg">linkedin.com/in/maggie-muriithi</p>
        </div>
        {/* Skills section */}
        <div className="m-10">
          <h2 className="text-2xl text-center font-bold mb-5">Skills</h2>
          <ul className="flex flex-wrap">
            <li className="bg-gray-200 px-3 py-1 rounded-lg m-2">Git</li>
            <li className="bg-gray-200 px-3 py-1 rounded-lg m-2">
              React Native
            </li>
            <li className="bg-gray-200 px-3 py-1 rounded-lg m-2">JavaScript</li>
            <li className="bg-gray-200 px-3 py-1 rounded-lg m-2">C</li>
            <li className="bg-gray-200 px-3 py-1 rounded-lg m-2">API</li>
            <li className="bg-gray-200 px-3 py-1 rounded-lg m-2">HTML5</li>
            <li className="bg-gray-200 px-3 py-1 rounded-lg m-2">CSS</li>
            <li className="bg-gray-200 px-3 py-1 rounded-lg m-2">ReactJS</li>
            <li className="bg-gray-200 px-3 py-1 rounded-lg m-2">Redux</li>
            <li className="bg-gray-200 px-3 py-1 rounded-lg m-2">Ruby</li>
            <li className="bg-gray-200 px-3 py-1 rounded-lg m-2">Python</li>
            <li className="bg-gray-200 px-3 py-1 rounded-lg m-2">NodeJS</li>
            <li className="bg-gray-200 px-3 py-1 rounded-lg m-2">Express</li>
            <li className="bg-gray-200 px-3 py-1 rounded-lg m-2">SQL</li>
            <li className="bg-gray-200 px-3 py-1 rounded-lg m-2">
              Ruby On Rails
            </li>
          </ul>
        </div>
        {/* Experience section */}
        <div className="m-10">
          <h2 className="text-2xl font-bold mb-5">Experience</h2>
          <div className="flex flex-col space-y-5">
            <div className="flex items-center">
              <FaBriefcase className="w-12 h-12 mr-5" />
              <div>
                <h3 className="text-xl font-bold">Frontend Developer</h3>
                <p className="text-gray-600">
                  PlayPesa Nigeria | Apr 2023 - Present (1 month)
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Work closely with lead developers to design products and
                    solutions to different user and infrastructure problems.
                  </li>
                  <li>
                    Communicate design ideas using user flows, process flows,
                    site maps, and wireframes.
                  </li>
                  <li>Maintain standards compliance.</li>
                  <li>Integrate software with existing systems.</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center">
              <FaBriefcase className="w-12 h-12 mr-5" />
              <div className="m-10">
                <h3 className="text-xl font-bold">
                  Head of Property Consultancy and Business Development
                </h3>
                <p className="text-lg font-semibold">
                  Proximity Point Properties
                </p>
                <p className="text-gray-600">
                  Mar 2021 - Jul 2022 (1 year 5 months)
                </p>
                <ul className="list-disc ml-8 mt-2">
                  <li>Managed a team of 5 consultants.</li>
                  <li>
                    Developed and implemented sales strategies that increased
                    the company's revenue by 30%.
                  </li>
                  <li>
                    Negotiated and closed deals with high net worth clients.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
