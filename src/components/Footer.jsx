import React from "react";
import { pages } from "../../public/constants";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="h-80 lg:h-60 blk w-full text-white mt-24  flex justify-center items-center">
      <div className="w-full px-5">
        <div className=" flex flex-col gap-8 items-center justify-center lg:flex-row lg:justify-between px-14 ">
          <div className="flex flex-col  gap-5">
            <p className="w-full text-center text-sm font-popins lg:text-left">
              pages
            </p>
            <div className="flex justify-center items-center gap-5 text-md lg:text-xl font-popins">
              {pages.map((data, index) => (
                <Link
                  key={index}
                  to={data.to}
                  className="relative before:absolute before:right-2 lg:text-lg shade before:flex before:items-center before:justify-center before:opacity-0 hover:before:opacity-100 before:h-12 before:w-12 hover:before:blur-xl before:bg-purple-500 text-white hover:text-purple-400  before:transform before:transition-all before:duration-200 transform transition-all duration-200 shrink-0 "
                >
                  {data.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="w-full text-center text-sm font-popins lg:text-right">
              Media
            </p>
            <div className="flex items-center gap-8 text-md  lg:text-lg font-popins flex-wrap justify-center">
              <a
                href="https://www.instagram.com/grown_up_kid__?igsh=MW5ubHd2cHQzNnM0MA=="
                target="_blank"
                className="relative before:absolute  shade before:-right-1  before:opacity-0 hover:before:opacity-100 before:h-10 before:w-10 hover:before:blur-xl before:bg-gradient-to-b before:from-amber-500 before:to-purple-500 text-white hover:text-amber-500 before:transform before:transition-all before:duration-200 transform transition-all duration-200 "
              >
                <button>
                  <i className="bi bi-instagram text-2xl"></i>
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/milton-vinciline-v-58b824205?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmUgIF19FQ1CjH6pBLfRk4w%3D%3D"
                target="_blank"
                className="relative before:absolute shade before:-right-1  before:opacity-0 hover:before:opacity-100 before:h-10 before:w-10 hover:before:blur-xl before:bg-blue-500 text-white hover:text-blue-400  before:transform before:transition-all before:duration-200 transform transition-all duration-200 "
              >
                <button>
                  <i className="bi bi-linkedin text-2xl"></i>
                </button>
              </a>
              <a
                href="https://discord.com/invite/Ne7BQJqx"
                target="_blank"
                className="relative before:absolute  shade before:-right-1  before:opacity-0 hover:before:opacity-100 before:h-10 before:w-10 hover:before:blur-xl before:bg-purple-500 text-white hover:text-purple-400  before:transform before:transition-all before:duration-200 transform transition-all duration-200 "
              >
                <button>
                  <i className="bi bi-discord text-2xl"></i>
                </button>
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=miltonvinciline08@gmail.com"
                target="_blank"
                className="relative before:absolute  shade before:-right-1  before:opacity-0 hover:before:opacity-100 before:h-10 before:w-10 hover:before:blur-xl before:bg-green-300 text-white hover:text-green-300  before:transform before:transition-all before:duration-200 transform transition-all duration-200 "
              >
                <button>
                  <i className="bi bi-envelope-at-fill text-2xl"></i>
                </button>
              </a>
              <a
                href="https://www.behance.net/20mss025mlton"
                target="_blank"
                className="relative before:absolute  shade before:-right-1  before:opacity-0 hover:before:opacity-100 before:h-10 before:w-10 hover:before:blur-xl before:bg-sky-500 text-white hover:text-sky-400  before:transform before:transition-all before:duration-200 transform transition-all duration-200 "
              >
                <button>
                  <i className="bi bi-behance text-2xl"></i>
                </button>
              </a>
              <a
                href="https://github.com/MIL10x"
                target="_blank"
                className="relative before:absolute  shade before:-right-1  before:opacity-0 hover:before:opacity-100 before:h-10 before:w-10 hover:before:blur-xl before:bg-sky-700 text-white hover:text-sky-700  before:transform before:transition-all before:duration-200 transform transition-all duration-200 "
              >
                <button>
                  <i className="bi bi-github text-2xl"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 ">
          <div className="max-lg:hidden w-[95%] h-[0.5px] bg-white mt-5 mb-5"></div>
        </div>
        <div className="flex gap-5 justify-center pt-5 px-14 items-center max-lg:mt-2 lg:justify-between">
          <p className="font-Gotham font-extrabold italic">
            <span className="font-popins font-normal">@ </span>MIL10x{" "}
            <span className="font-popins font-normal"> 2025 </span>
          </p>
          <Link to={"/privacy"} className="font-popins font-normal text-xs">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
