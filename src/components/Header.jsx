import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router";
import { useWindowScroll } from "react-use";

const Header = ({ setaudioplay, audioplay }) => {
  const { y: windowscrolly } = useWindowScroll();
  const navigationref = useRef();
  const [currentaxis, setcurrentaxis] = useState(0);
  const [naviagtion, setnavigation] = useState(true);
  useEffect(() => {
    if (windowscrolly === 0) {
      setnavigation(true);
    } else if (windowscrolly > currentaxis) {
      setnavigation(false);
    } else if (currentaxis > windowscrolly) {
      setnavigation(true);
    }
    setcurrentaxis(windowscrolly);
  }, [windowscrolly]);
  useEffect(() => {
    gsap.to(navigationref.current, {
      y: naviagtion ? 0 : -100,
      opacity: naviagtion ? 1 : 0,
      ease: "power1.inOut",
    });
  }, [naviagtion]);

  const [menutoggle, setmenutoggle] = useState(false);
  function audioplayer() {
    setaudioplay(!audioplay);
  }

  useGSAP(() => {
    const mobHeader = document.querySelectorAll(".Mobheader");
    if (mobHeader.length > 0) {
      gsap.to(mobHeader, {
        y: -2,
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
        stagger: {
          amount: 0.7,
          grid: [1, 2],
          from: "start",
          axis: "x",
        },
      });
    }
  }, [menutoggle]);

  useGSAP(() => {
    const topheaddown = document.querySelector(".topheaddown");
    if (topheaddown) {
      gsap.to(topheaddown, {
        y: 50,
        duration: 0.01,
        ease: "power2.inOut",
      });
    }
  }, [menutoggle]);
  useGSAP(() => {
    const topheadup = document.querySelector(".topheadup");
    if (topheadup) {
      gsap.to(topheadup, {
        y: 0,
        duration: 0.01,
        ease: "power2.inOut",
      });
    }
  }, [menutoggle]);

  const [darkmode, setdarkmode] = useState(
    JSON.parse(localStorage.getItem("darkmode")) || false
  );
  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkmode));
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  const timeline = gsap.timeline({ delay: 1 });
  useGSAP(() => {
    const stagge = document.querySelectorAll(".stag");
    if (stagge.length > 0) {
      timeline.to(stagge, {
        y: -4,
        duration: 1.3,
        opacity: 1,
        ease: "power4.inOut",
      });
      timeline.to(stagge, {
        y: -8,
        duration: 0.4,
        opacity: 0,
        ease: "power2.Out",
      });
    }
  }, []);
  useGSAP(() => {
    const stagge1 = document.querySelectorAll(".stag1");
    if (stagge1.length > 0) {
      timeline.to(stagge1, {
        y: -4,
        duration: 1.3,
        opacity: 1,
        ease: "power4.inOut",
      });
      timeline.to(stagge1, {
        y: -8,
        duration: 0.4,
        opacity: 0,
        ease: "power2.Out",
      });
    }
  }, []);
  useGSAP(() => {
    const stagge2 = document.querySelectorAll(".stag2");
    if (stagge2.length > 0) {
      timeline.to(stagge2, {
        y: -4,
        duration: 1.3,
        opacity: 1,
        ease: "power4.inOut",
      });
      timeline.to(stagge2, {
        duration: 1.5,
        opacity: 0,
        ease: "power2.Out",
      });
    }
  }, []);
  const [scrollDisabled, setScrollDisabled] = useState(false);
  function disableScroll() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    setScrollDisabled(true);
  }
  function enableScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    setScrollDisabled(false);
  }
  const [downanimation, setdownanimation] = useState(false);
  return (
    <div className="relative flex justify-center items-center">
      {menutoggle && (
        <div className="absolute min-h-[500vh]  w-full backdrop-blur-[2px]  bg-black/75 lg:hidden top-0  left-0 z-50 "></div>
      )}
      <div
        ref={navigationref}
        className={`fixed z-50 left-[50%] -translate-x-[50%] sm:left-[50%] sm:-translate-x-[50%]  rounded-2xl top-8 w-[90%] sm:w-[90%]  blk p-1.5 text-white flex items-center justify-between px-4 lg:py-3 max-lg:py-3.5 transform transition-all duration-500 ${
          downanimation ? " topheaddown" : " topheadup  "
        } `}
      >
        <Link
          to="/"
          onClick={() => {
            setmenutoggle(false);
            setdownanimation(false);
            enableScroll();
          }}
          className={`top-0 max-lg:text-2xl lg:text-xl font-Gotham font-black italic p-3 cursor-pointer ${
            downanimation ? " topheaddown" : " topheadup  "
          }`}
        >
          MIL10x
        </Link>
        {menutoggle && (
          <>
            <div
              className={`max-lg:absolute top-24 Mobheader flex flex-col opacity-0 justify-center  flex-wrap px-9 w-[90%] font-popins transition-all translate-y-3  duration-700 lg:hidden font-semibold text-3xl blk rounded-2xl h-96 gap-3 ${
                downanimation ? " topheaddown" : " topheadup  "
              } `}
            >
              <Link
                to="/Projects"
                onClick={() => {
                  setmenutoggle(false);
                  setdownanimation(false);
                  enableScroll();
                }}
              >
                Portfolio&projects
              </Link>
              <Link
                to="/Resume"
                onClick={() => {
                  setmenutoggle(false);
                  setdownanimation(false);
                  enableScroll();
                }}
              >
                Resume
              </Link>
              <Link
                to="/Contact"
                onClick={() => {
                  setmenutoggle(false);
                  setdownanimation(false);
                  enableScroll();
                }}
              >
                Contact
              </Link>
            </div>
            <div className="max-lg:absolute Mobheader top-[490px] flex opacity-0  items-center p-10 w-[90%] font-popins transition-all translate-y-3  duration-700 lg:hidden  blk rounded-2xl h-40 gap-5 ">
              <button
                onClick={() => setdarkmode(!darkmode)}
                className="rounded-2xl shadow-800 size-16 w-24  flex gap-2 justify-center items-center lg:hidden "
              >
                {darkmode ? (
                  <i className="bi bi-cloud-moon-fill text-3xl text-blue-300"></i>
                ) : (
                  <i className="bi bi-brightness-low-fill text-3xl text-amber-500"></i>
                )}
              </button>
              <button
                onClick={() => audioplayer()}
                className="rounded-2xl  shadow-800 size-16 w-24 flex gap-2 cursor-pointer justify-center items-center lg:hidden  "
              >
                {[1, 2, 3, 4, 5].map((data, index) => (
                  <div
                    key={index}
                    className={`rounded-full  w-1 h-3.5 delay-500 bg-white hover:opacity-0 ${
                      audioplay ? "animate-offer " : "animate-none "
                    } `}
                    style={{ animationDelay: `${data * 0.1}s` }}
                  />
                ))}
              </button>
            </div>
          </>
        )}
        <div className="relative w-full flex lg:hidden justify-center items-center ">
          <p className="stag opacity-0 absolute text-xl font-doto -translate-x-3 translate-y-3 ">
            Helloo...
          </p>
          <p className=" stag1 opacity-0 absolute text-xl font-doto -translate-x-3  translate-y-3">
            welcome to
          </p>
          <p className=" stag2 opacity-0 absolute text-xl font-doto italic  -translate-x-3  translate-y-3">
            MIL10x
          </p>
        </div>

        <div>
          <button
            onClick={() => {
              setmenutoggle(!menutoggle);
              scrollDisabled ? enableScroll() : disableScroll();
              setdownanimation(!downanimation);
            }}
            className="rounded-full  size-10 flex flex-col gap-1.5 justify-center items-center lg:hidden "
          >
            <span
              className={`rounded-full h-0.5 w-7 bg-white transition-all duration-300 ${
                menutoggle ? " translate-y-2 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`rounded-full h-0.5 w-5 bg-white transition-all duration-300 ${
                menutoggle ? " translate-x-0 w-[0px] " : ""
              }`}
            ></span>
            <span
              className={`rounded-full h-0.5 w-7 bg-white transition-all duration-300 ${
                menutoggle ? " -translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>
        <div className="max-lg:hidden flex text-xl justify-center items-center font-popins  w-full gap-10 ">
          <Link
            to="/Projects"
            onClick={() => setmenutoggle(!menutoggle)}
            className=" relative text-[#9c9c9c] after:absolute after:-bottom-1 hover:text-white after:left-0 after:h-[2px] after:w-full  after:scale-x-0  after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:scale-x-100 after:bg-white"
          >
            Portfolio&projects
          </Link>
          <Link
            to="/Resume"
            onClick={() => setmenutoggle(!menutoggle)}
            className="relative text-[#9c9c9c] after:absolute after:-bottom-1 after:left-0 hover:text-white after:h-[2px] after:w-full  after:scale-x-0  after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:scale-x-100 after:bg-white "
          >
            Resume
          </Link>
          <Link
            to="/Contact"
            onClick={() => setmenutoggle(!menutoggle)}
            className="relative text-[#9c9c9c] after:absolute after:-bottom-1 after:left-0 hover:text-white after:h-[2px] after:w-full  after:scale-x-0  after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:scale-x-100 after:bg-white"
          >
            Contact
          </Link>
        </div>
        <div className="max-lg:hidden flex gap-3 ">
          <div
            onClick={() => setdarkmode(!darkmode)}
            className="rounded-2xl shadow-800 size-12  flex gap-2 justify-center items-center cursor-pointer "
          >
            {darkmode ? (
              <i className="bi bi-cloud-moon-fill text-2xl text-blue-300"></i>
            ) : (
              <i className="bi bi-brightness-low-fill text-3xl text-amber-500"></i>
            )}
          </div>
          <button
            onClick={() => audioplayer()}
            className="rounded-2xl  shadow-800 size-12  flex gap-1 justify-center items-center cursor-pointer "
          >
            {[1, 2, 3].map((data, index) => (
              <div
                key={index}
                className={`rounded-full  w-1 h-3 delay-500 bg-white hover:opacity-0 ${
                  audioplay ? "animate-offer " : "animate-none "
                } `}
                style={{ animationDelay: `${data * 0.1}s` }}
              />
            ))}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
