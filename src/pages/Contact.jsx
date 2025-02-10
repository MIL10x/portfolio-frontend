import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap/all";
import { MotionPathPlugin } from "gsap/src/all";
import { Link } from "react-router";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [captcha, setcaptcha] = useState("");
  const [checkboxvalue, setcheckboxvalue] = useState(false);
  const [loading, setloading] = useState(false);
  const [mfc, setmfc] = useState("");

  const api = import.meta.env.VITE_URL_BACKEND;

  const a = !!Name;
  console.log(Name);
  const b = /[A-Za-z0-9]+@[a-zA-Z]{0,5}.[a-zA-Z]{0,5}$/;
  const c = b.test(Email);
  const d = !!Message;
  const e = Number(captcha) === 4;
  const f = checkboxvalue;
  const submitprocess = async () => {
    console.log(a, c, d, e, f);
    if (a && c && d && e && f) {
      try {
        setloading(true);
        await axios.post(api, {
          name: Name,
          email: Email,
          message: Message,
        });

        setloading(false);
        setmfc("Message sent successfully");

        setTimeout(() => {
          setmfc("");
        }, 3000);
      } catch (error) {
        setloading(false);
        setmfc("Not able to send message; try again a few hours later");

        setTimeout(() => {
          setmfc("");
        }, 3000);
      }
      setEmail("");
      setName("");
      setMessage("");
      setcaptcha("");
      setcheckboxvalue(false);
    } else if (a && c === false && d && e && f) {
      setmfc("Your email is invalid");
      setTimeout(() => {
        setmfc("");
      }, 3000);
      setEmail("");
      setName("");
      setMessage("");
      setcaptcha("");
      setcheckboxvalue(false);
    } else {
      setmfc("Please complete all the fields properly");
      setTimeout(() => {
        setmfc("");
      }, 3000);

      setEmail("");
      setName("");
      setMessage("");
      setcaptcha("");
      setcheckboxvalue(false);
    }
  };

  //note: split text animation should to pay for the plugin

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const circleRef = useRef(null);
  useEffect(() => {
    const mp = document.querySelector(".mp");
    gsap.to(circleRef.current, {
      duration: 8,
      repeat: 12,
      yoyo: true,
      ease: "power1.inOut",
      motionPath: {
        path: mp,
        alignOrigin: [0.25, 0.25],
      },
    });
  }, []);

  useEffect(() => {
    const animateOnLargeScreens = () => {
      if (isLargeScreen) {
        gsap.to(".scrldown", {
          y: 150,
          scrollTrigger: {
            trigger: ".scrldown",
            start: "top 10%",
            end: "top 1%",
            scrub: 1,
          },
        });

        gsap.to(".scrlup", {
          y: -210,
          scrollTrigger: {
            trigger: ".scrlup",
            start: "top 80%",
            end: "top 10%",
            scrub: 1,
          },
        });
        gsap.to("#tt", {
          y: -180,
          scale: isLargeScreen ? 4 : 1,

          scrollTrigger: {
            trigger: ".scrlup",
            start: "top 80%",
            end: "top 1%",
            scrub: 1,
          },
        });
      } else {
        gsap.killTweensOf(".scrldown");
        gsap.killTweensOf(".scrlup");
        gsap.killTweensOf("#tt");
      }
    };

    animateOnLargeScreens();
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isLargeScreen]);

  return (
    <div className="container targetscrl mx-auto mb-56 mt-40  flex items-center flex-col max-lg:mt-10  flex-wrap shrink-0 ">
      <div
        className="mp"
        fill="none"
        d="M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819"
      />
      <div className="min-h-dvh max-lg:min-h-[45rem] relative  flex items-center flex-col dark:text-white gap-32 max-lg:gap-36">
        <p className="text-sm font-popins text-left cursor-pointer"></p>
        <div
          ref={circleRef}
          className="absolute circleanimation h-24 w-24 max-lg:hidden bg-gradient-to-tr from-amber-500 to-purple-500 left-36 top-48 z-0 rounded-full "
        ></div>
        <div className="absolute lg:hidden h-24 w-24 bg-gradient-to-tr from-amber-500 to-purple-500 left-36 top-48 z-0 rounded-full "></div>
        <p className="text-9xl scrldown max-lg:px-10 z-10 font-popins text-center mb-20 mt-24 max-lg:mt-0 max-lg:mb-0 max-lg:text-5xl">
          Let’s bring your idea to life to create something amazing.
        </p>
        <p className="text-2xl scrlup font-popins text-center z-10 pt-72 pb-10 max-lg:z-10 max-lg:mt-0 max-lg:mb-0 max-lg:text-sm max-lg:pt-5 max-lg:px-10 ">
          Feel free to contact me at any time; I'm happy to chat about ideas,
          projects, or whatever else you're involved in.
        </p>
      </div>
      <div className="relative  mb-56 max-lg:mb-28  w-[80%] flex flex-col items-center gap-10 max-lg:gap-10">
        <p
          id="tt"
          className={`z-10  ${
            isLargeScreen ? " max-lg:text-xl" : "text-4xl"
          } font-popins font-semibold text-center dark:text-white`}
        >
          Let's TalK
        </p>
        {mfc == "Message sent successfully" ? (
          <p className="absolute -top-8 text-center text-green-500 text-md font-popins">
            {mfc}
          </p>
        ) : (
          <p className="absolute -top-8 text-center text-red-500 text-md font-popins">
            {mfc}
          </p>
        )}
        <div className="z-10 flex flex-col gap-20 max-lg:gap-10 w-full">
          <div className="flex max-lg:flex-col gap-20  w-full ">
            <input
              type="text"
              name="Name"
              id=""
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="what's Your Name"
              className="z-10 font-popins font-semibold dark:bg-black py-3 dark:text-white text-black border-b-[0.1px] border-black dark:border-white outline-none decoration-none flex shrink-0 flex-wrap flex-grow focus:border-b-[3px]"
            />
            <input
              type="text"
              name="Email"
              id=""
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="z-10 font-popins font-semibold dark:bg-black py-3 dark:text-white text-black  border-b-[0.1px] border-black dark:border-white outline-none decoration-none flex shrink-0 flex-wrap flex-grow focus-visible:border-b-[3px]"
            />
          </div>
          <textarea
            type="text"
            name="Message"
            id=""
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell Us About Your Project"
            className="z-10  font-popins font-semibold dark:bg-black py-3  dark:text-white/20 text-black border-b-[0.1px] transform duration-500  border-black dark:border-white outline-none decoration-none flex shrink-0 flex-wrap flex-grow focus-visible:border-b-[3px]"
          />
          <div className="z-10 flex items-center justify-center gap-2 pt-14 max-lg:pt-0 shrink-0 flex-wrap ">
            <p className="z-10 dark:bg-white dark:text-black p-3 rounded-lg bg-black text-white">
              2
            </p>
            <p className="z-10 text-black p-3 rounded-2xl dark:text-white">+</p>
            <p className="z-10 dark:bg-white dark:text-black p-3 rounded-lg bg-black text-white">
              2
            </p>
            <p className="z-10 text-black p-3 rounded-2xl dark:text-white">=</p>
            <input
              type="Number"
              name="result"
              id=""
              value={captcha}
              onChange={(e) => setcaptcha(e.target.value)}
              className=" z-10 p-3 rounded-lg w-8 outline-none decoration-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-black text-white dark:bg-white dark:text-black"
            />
            <p className="dark:text-white font-popins max-lg:pt-2">
              *Captcha Validation
            </p>
          </div>
          <div className="absolute max-lg:hidden size-96 opacity-15 bg-gradient-to-tr from-amber-500 to-purple-500 left-36  top-96 z-0 rounded-full "></div>
          <div className="z-10 flex items-center justify-center gap-2  dark:text-white font-popins ">
            <input
              type="checkbox"
              name=""
              id=""
              checked={checkboxvalue}
              onChange={() => setcheckboxvalue(!checkboxvalue)}
            />
            <p className="dark:text-white font-popins">
              Do you Agree with{" "}
              <Link to="/privacy" className="text-blue-500 ">
                Privacy Policy?
              </Link>
            </p>
          </div>
          <div className="z-10 w-full flex items-center justify-center text-white  ">
            <button
              onClick={() => submitprocess()}
              className="bg-gradient-to-tr from-amber-500 to-purple-500 px-5 p-3 rounded-full  dark:text-black text-white font-semibold font-popins hover:animate-pulse"
            >
              {loading ? (
                <i className="bi bi-arrow-clockwise animate-spin bg-blue-500"></i>
              ) : (
                <p>
                  Submit
                  <span>
                    <i className="bi bi-send-fill "></i>
                  </span>
                </p>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="relative h-72 max-lg:h-0 w-full font-popins ">
        <div className="z-20  flex justify-between px-10 items-centerflex flex-row items-center gap-2 max-lg:flex-col group ">
          <button
            onClick={() =>
              navigator.clipboard.writeText("miltonvinciline08@gmail.com")
            }
            className=" z-20 flex flex-col max-lg:h-40 max-lg:text-lg  cursor-pointer gap-10 max-lg:gap-5 justify-center items-center p-5  text-center w-full  "
          >
            <p className="text-4xl dark:text-white font-popins group-hover:opacity-10 transform transition-all duration-200 max-lg:text-lg">
              Get in touch with me on
            </p>
            <p className="text-[10rem] dark:text-white  font-Squada group-hover:text-[12rem] transform transition-all duration-200 max-lg:text-4xl max-lg:group-hover:text-3xl active:text-9xl">
              miltonvinciline08@gmail.com
            </p>
            <p className="opacity-0 group-hover:opacity-100 font-Squada text-2xl dark:text-white max-lg:text-lg">
              To copy it, click
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
