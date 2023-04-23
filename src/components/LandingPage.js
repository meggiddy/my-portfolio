function LandingPage() {
  return (
    <div className="flex flex-col md:flex-row my-40">
      <div className="md:w-1/2">
        <h1 className="font-serif pl-5 text-6xl md:text-8xl mt-48 mb-32 md:pr-12">I'm Maggie Muriithi</h1>
      </div>
      <div className="md:w-1/2 md:border-l-2 pr-7 border-white pt-8 md:pt-40 md:pl-12">
        <p className="mx-2">
          a Frontend Developer, Mobile App Developer(React Native) and a big
          Marvel fan.
        </p>
        <p className="mx-2">
          I love working with my hands to make magic happen. View my Projects,
          Resume, Contact Me or send me an email at .....
        </p>
        <div className="mt-40 md:mt-20"><a className="mx-2" href="/about">See More About Me</a></div>
      </div>
    </div>
  );
}

export default LandingPage;
