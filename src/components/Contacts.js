import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { send } from "emailjs-com";
import { useState } from "react";
import Swal from "sweetalert2";

function Contacts() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const [submitEnabled, setSubmitEnabled] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitEnabled(false);
    send("service_kgam9sy", "template_u2cq2aq", toSend, "4rVcoOIypiCHffMAe")
      .then((response) => {
        setSubmitEnabled(true);

        Swal.fire({
          title: "Sent!",
          text: "Your message has been sent.",
          icon: "success",
          timer: 1000,
        });
        setToSend({ from_name: "", message: "", reply_to: "" });
      })
      .catch((error) => {
        setSubmitEnabled(true);

        Swal.fire({
          title: "Error!",
          text: "Oops...,Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1 className="font-serif flex justify-center text-6xl md:text-6xl mt-40 mb-32 md:pr-12">
        Get in Touch
      </h1>
      <div className="flex flex-row justify-center m-20">
        <a
          href="https://www.linkedin.com/in/maggie-muriithi/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white hover:animate-bounce"
        >
          <FaLinkedin className="text-8xl ml-4" />
        </a>
        <a
          href="https://github.com/meggiddy"
          className="hover:text-white hover:animate-bounce"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-8xl ml-4" />
        </a>
        <a
          href="https://twitter.com/Mimamitchelle"
          className="hover:text-white hover:animate-bounce"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="text-8xl ml-4" />
        </a>
      </div>
      <div className="flex flex-wrap">
        <div className="col-lg-8 mx-auto max-w-lg">
          <div className="bg-white/50 w-96 rounded-lg p-5 shadow-down mx-auto">
            <h4 className="text-xl font-bold mb-8 text-center">
              Drop me a line
            </h4>
            <form
              onSubmit={onSubmit}
              method="POST"
              className="flex row flex-col w-full"
            >
              <div className="flex align-center">
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  placeholder="Your Name"
                  value={toSend.from_name}
                  onChange={handleChange}
                  className="flex-1 bg-transparent w-full px-4 py-2 mb-4 border-b-2 border-white text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex col-12 align-center">
                <input
                  type="reply_to"
                  id="reply_to"
                  value={toSend.reply_to}
                  onChange={handleChange}
                  name="reply_to"
                  placeholder="Your Email"
                  className="flex-1 bg-transparent w-full px-4 py-2 mb-4 border-b-2 border-white focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex col-12 align-center">
                <textarea
                  name="message"
                  id="message"
                  value={toSend.message}
                  onChange={handleChange}
                  className="flex-1 bg-transparent w-full h-40 px-4 py-2 mb-4 border-b-2 border-white focus:border-blue-500 focus:outline-none"
                  placeholder="Type Message Here"
                ></textarea>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  disabled={!submitEnabled}
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
