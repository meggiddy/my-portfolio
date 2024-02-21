import { useEffect } from "react";
import NavBar from "./Nav";
import Calendar from "./Calender";

function Hero() {
  useEffect(() => {
    const dataText = ["Frontend Dev", "Web Design", "Mobile App Dev", " Ui • Ux • Design", "Co-Founder",];

    function typeWriter(text, i, fnCallback) {
      if (i < text.length) {
        document.querySelector("#typewriter").innerHTML =
          text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      } else if (typeof fnCallback === "function") {
        setTimeout(fnCallback, 700);
      }
    }

    function startTextAnimation(i) {
      if (typeof dataText[i] === "undefined") {
        setTimeout(function () {
          startTextAnimation(0);
        }, 20000);
      } else if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, function () {
          startTextAnimation(i + 1);
        });
      }
    }

    startTextAnimation(0);
  }, []);
  return (
    <div className="hero">
      <NavBar />
      <div className="flex gap-4 py-20 min-h-40">
        <div className="w-2/3">
          <div className="container pl-4">
            <p className="typed text-5xl pb-7">I am Meg</p>
            <p id="typewriter" className="text-9xl">
              DEVELOPER
            </p>
          </div>
        </div>
        <div className="w-1/3 pr-6">
          <Calendar/>
          <p>
            I AM DEVELOPER BASED IN MALINDI, KENYA. I HAVE MANY YEARS OF
            EXPERIENCE IN BUILDING WEBSITES AND BUILDING IT TEAMS. I AM A
            MAXIMALIST AND ANIMATION ENTHUTHIAST. I LOVE AVENGERS, FARMING AND
            ART
          </p>
          <button type="button">CONTACT ME</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
