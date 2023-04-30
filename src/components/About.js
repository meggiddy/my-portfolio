import Hero from "./images/Hero.jpeg";
function About() {
  return (
    <>
      <div className="flex flex-col mb-20">
        <div className="w-full">
          <h1 className="font-serif line-clamp-1 md:line-clamp-2 pl-5 text-4xl md:text-6xl mt-10 md:mt-40 md:mb-32 md:pr-12">
            Who is Maggie?
          </h1>
        </div>
        <div className="flex flex-col md:flex-row m-5">
          <div className="md:w-1/2 md:ml-20 justify-center">
            <img className="w-96 md:w-500px rounded-lg" alt="hero-pic" src={Hero}></img>
          </div>
          <div className="md:w-1/2">
            <p className="m-5">
              I am a Frontend Developer from Malindi, Kilifi County, Kenya with
              experience in React, Redux, Ruby on Rails, and more.
            </p>
            <p className="m-5">
              I've worked as a Frontend Developer at PlayPesa Nigeria and as
              Head of Property Consultancy and Business Development at Proximity
              Point Properties, as well as in Real Estate and Property Valuation
              roles.
            </p>
            <p className="m-5">
              I hold a Bachelor's degree in Real Estate and Property Management
              from the University of Nairobi, and I'm currently studying
              Software Engineering at ALX Africa. I'm passionate about creating
              effective solutions to problems and leveraging my skills to make
              an impact.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
