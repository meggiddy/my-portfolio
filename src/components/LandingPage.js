import { GrCertificate } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";

function LandingPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row py-40" id="header">
        <div className="md:w-1/2">
          <h1 className="font-serif pl-5 text-6xl md:text-8xl mt-48 mb-32 md:pr-12">
            I'm Maggie Muriithi
          </h1>
        </div>
        <div className="md:w-1/2 md:border-l-2 pr-7 border-white pt-8 md:pt-40 md:pl-12">
          <p className="mx-2">
            a Frontend Developer, Mobile App Developer(React Native) and a big
            Marvel fan.
          </p>
          <p className="mx-2">
            I love working with my hands to make magic happen.
          </p>
          <p className="mx-2 my-4">
            View my{" "}
            <a
              className=" bg-white/50 rounded p-2 hover:bg-sky-300 active:bg-sky-300"
              href="/projects"
            >
              Projects
            </a>
            ,
            <a
              className=" bg-white/50 rounded p-2 hover:bg-sky-300 active:bg-sky-300"
              href="/resume"
            >
              Resume
            </a>
            , or{" "}
            <a
              className=" bg-white/50 p-2 rounded hover:bg-sky-300 active:bg-sky-300"
              href="/contacts"
            >
              Contact Me
            </a>
            .
          </p>
          <div className="mt-40 md:mt-20">
            <a
              className="mx-2 bg-white/50 rounded p-5 hover:bg-sky-300 active:bg-sky-300"
              href="/about"
            >
              See More About Me{" "}
              <AiOutlineArrowRight
                className="inline-block mr-2 mb-1"
                size={18}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="m-20">
        <div className="flex-grow">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Skills and Expertice
          </h2>
          <div className="mx-auto ml-6 mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 lg:mx-10 lg:max-w-none lg:grid-cols-4">
            <article className="flex max-w-xl flex-col items-start justify-between md:border-r-2">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  FRONT-END DEVELOPMENT
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  React, Tailwind, C, and Ruby are my specialties. I love creating
                  beautiful and responsive user interfaces.
                </p>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between md:border-r-2">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  BACK-END DEVELOPMENT
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                I am skilled in Ruby on Rails, Node.js, GraphQL, Express, and MongoDB to create powerful and scalable back-end systems.
                </p>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between md:border-r-2">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  MOBILE APP DEVELOPMENT
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                I have experience developing cross-platform mobile applications using React Native.
                </p>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  UI/UX DESIGN
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                I am proficient in Figma, and I love creating intuitive and user-friendly design systems.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="justify-center m-10">
        <h2 className="text-2xl md:text-3xl font-bold mt-10 text-center mb-10">
          Education
        </h2>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="flex flex-grow items-center md:border-r-2 ml-4 border-white pb-3 mb-3">
            <div className="m-3">
              <GrCertificate className="w-12 h-12" />
            </div>
            <div>
              <h4 className="text-lg font-bold">
                Professional Certificate in Software Engineering | Fullstack
                Development
              </h4>
              <p className="text-gray-600 m-2 text-sm">MORINGA SCHOOL</p>
            </div>
          </div>
          <div className="flex flex-grow items-center md:border-r-2 ml-4 border-white pb-3 mb-3">
            <div className="m-3">
              <GrCertificate className="w-12 h-12" />
            </div>
            <div>
              <h4 className="text-lg font-bold">
                Professional Certificate in Responsive Web Design | Fullstack
                Development
              </h4>
              <p className="text-gray-600 m-2 text-sm">FREECODECAMP SCHOOL</p>
            </div>
          </div>
          <div className="flex flex-grow items-center md:border-r-2 ml-4 border-white pb-3 mb-3">
            <div className="m-3">
              <GrCertificate className="w-12 h-12" />
            </div>
            <div>
              <h4 className="text-lg font-bold">
                Professional Certificate in React Native
              </h4>
              <p className="text-gray-600 m-2 text-sm">CODECADEMY SCHOOL</p>
            </div>
          </div>
          <div className="flex flex-grow items-center ml-4 pb-3 mb-3">
            <div className="m-3">
              <GrCertificate className="w-12 h-12" />
            </div>
            <div>
              <h4 className="text-lg font-bold">
                Professional Certificate in SQL
              </h4>
              <p className="text-gray-600 m-2 text-sm">CODECADEMY SCHOOL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
