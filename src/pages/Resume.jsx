import React from "react";
import load from "/Assets/images/zoom.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import psglogo from "/Assets/images/psglogo.png";
import { list } from "postcss";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  useGSAP(() => {
    const fade = document.querySelectorAll(".fade");
    gsap.to(fade, {
      y: -150,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".fade",
        start: "center center",
        stop: "bottom 70%",
        scrub: 1,
      },
    });
    const fade2 = document.querySelectorAll(".fade2");
    gsap.to(fade2, {
      y: -150,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".fade",
        start: "bottom 70%",
        stop: "bottom 70%",
        scrub: 1,
      },
    });
    const movedown = document.querySelectorAll(".movedown");
    gsap.to(movedown, {
      y: 200,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".fade",
        start: "bottom 90%",
        stop: "bottom 100%",
        scrub: 1,
      },
    });
    const movedown2 = document.querySelectorAll(".movedown");
    gsap.to(movedown2, {
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".seconddown",
        start: "top 80%",
        stop: "top 80",
        scrub: 1,
      },
    });
  }, []);
  useGSAP(() => {
    const timeline2 = gsap.timeline({});
    const seconddown = document.querySelectorAll(".seconddown");
    timeline2.to(seconddown, {
      y: 200,
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".fade",
        start: "top 30%",
        stop: "bottom 70%",
        scrub: 1,
      },
    });
    timeline2.to("#gdf", {
      scale: 2,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gd",
        start: "top 90%",
        stop: "top 100%",
        scrub: 1,
      },
    });
  }, []);

  useGSAP(() => {
    const isSmallScreen = window.innerWidth <= 768;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".io",
        start: "center center",
        stop: "bottom bottom",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    timeline.to("#it", {
      height: "100vh",
      width: "100vw",
      borderRadius: 0,
    });
    timeline.to("#it", {
      height: isSmallScreen ? "400vh" : "165vh",
      borderRadius: 0,
    });
  }, []);

  useGSAP(() => {
    const subfade = document.querySelectorAll(".subfade");
    gsap.to(subfade, {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: subfade,
        start: "top 30%",
        stop: "top 31%",
        scrub: 0.1,
      },
    });
    const mainfade = document.querySelectorAll(".mainfade");
    gsap.to(mainfade, {
      opacity: 0,
      scale: 18,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: mainfade,
        start: "top 60%",
        stop: "top 65%",
        scrub: 1,
      },
    });
  }, []);
  useGSAP(() => {
    const slide = document.querySelectorAll(".slide");

    gsap.to(slide, {
      opacity: 1,
      ease: "power2.inOut",
      duration: 10,
      scrollTrigger: {
        trigger: slide,
        start: "top 10%",
        stop: "top 95%",
        scrub: 1,
      },
    });
  }, []);
  return (
    <div className="min-h-screen w-full relative flex flex-col gap-10 justify-center items-center dark:text-white">
      <div className="min-h-screen relative flex flex-col justify-between items-center max-lg:justify-items-start gap-5 px-10 container mx-auto ">
        <div className="flex w-full fade2 justify-end gap-1.5 translate-y-56 ">
          <div className="h-8 w-3 bg-black dark:bg-white"></div>
          <div className="h-8 w-2 bg-black dark:bg-white"></div>
          <div className="h-8 w-1 bg-black dark:bg-white"></div>
          <div className="h-8 w-2 bg-black dark:bg-white"></div>
          <div className="h-8 w-1 bg-black dark:bg-white"></div>
          <div className="h-8 w-2 bg-black dark:bg-white"></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[5rem] fade max-lg:text-5xl font-Libre_Caslon text-center max-lg:text-left">
            Glad you’re here! Explore my resume!
          </p>
          <p className="text-xl fade font-medium max-lg:text-base font-Libre_Caslon text-center w-[85%] max-lg:text-left max-lg:w-full">
            As a passionate and eager-to-learn website developer, I’m excited to
            kickstart my journey in the world of web development! My resume
            highlights my growing skills in building visually appealing,
            user-friendly websites using modern web technologies. I’m committed
            to crafting responsive and dynamic web experiences. Take a look at
            my work, and let's explore how I can bring fresh ideas to life!
          </p>
        </div>
        <div className="flex-col justify-center items-center -translate-y-36 gap-10">
          <p className="font-Libre_Caslon text-3xl movedown">
            My resume is here
          </p>
          <div className="w-full flex justify-center items-center">
            <i className="bi bi-arrow-down dark:text-white text-3xl pt-3 movedown "></i>
          </div>
        </div>
        <div className="absolute top-[75%] -left-56 max-lg:hidden">
          <div className="h-56 w-3 fade bg-black dark:bg-white"></div>
        </div>
      </div>
      <p
        id="gdf"
        className="font-Libre_Caslon translate-y-5 text-3xl opacity-0 seconddown "
      >
        Go Deeper
      </p>
      <i className="bi bi-arrow-down dark:text-white text-3xl opacity-0 seconddown "></i>
      <div className="h-dvh w-screen  io flex justify-center items-center max-lg:-translate-y-64">
        <div
          id="it"
          className="z-20 relative h-[40vh] bg-[#D7D7D7] max-lg:h-[25vh] max-lg:w-56 overflow-hidden w-96 shadow-700"
        >
          <p className=" absolute top-[40%] left-[50%]  -translate-x-[50%] text-5xl font-Abril mainfade text-gray-700 z-20">
            Resume
          </p>
          <div className="absolute top-0 left-0 bg-[#D7D7D7] w-full h-full z-10 subfade">
            <p className=" absolute top-[49%] left-[50%] -translate-x-[50%] text-xs max-lg:text-[10px] max-lg:top-[55%] font-popins text-gray-700 z-20">
              (ATS verified Resume)
            </p>
            <p className=" absolute top-[89%] left-[15%] -translate-x-[50%] text-xs subfade max-lg:left-[20%] font-popins text-gray-700 z-20">
              Intro Page
            </p>
          </div>
          <div className="w-screen h-full p-32 max-lg:p-16 slide dark:text-gray-700 opacity-0 z-30">
            <div className="w-full h-auto  grid grid-cols-2">
              <div className="flex flex-col gap-2 pt-5">
                <p className="text-7xl font-popins font-semibold ">
                  MILTON VINCILINE V
                </p>
                <p className="font-bold font-popins text-xl">
                  Master of Science Software System final-year student
                </p>
                <p className=" font-popins text-lg">
                  Phone No: (+91)7868886051, Email Id:
                  miltonvinciline08@gmail.com
                </p>
                <p className=" font-popins text-lg">
                  LinkedIn:
                  <button
                    className=" text-left "
                    href="https://www.linkedin.com/in/milton-vinciline-v-58b824205/"
                    target="_blank"
                  >
                    https://www.linkedin.com/in/milton-vinciline-v-58b824205/
                  </button>
                </p>
                <p className=" font-popins text-lg">
                  GitHub: https://github.com/MIL10x
                </p>
              </div>
              <div className="w-full flex justify-end items-start max-lg:hidden">
                <img src={psglogo} className="size-48" alt="" />
              </div>
            </div>
            <p className="text-4xl font-popins font-bold pt-8 ">SUMMARY</p>
            <p className="text-justify text-xl font-popins pt-5">
              I am a MSc Software Systems student with hands-on experience in
              web development and UX research. My projects, including e-commerce
              platforms and movie information applications, showcase my
              technical proficiencies in JavaScript and its Frameworks. As an
              intern at Shamla Tech Solutions, I enhanced my skills in 3D design
              and UX research, contributing to various innovative projects
            </p>
            <p className="text-4xl font-popins font-bold pt-8 ">EDUCATION</p>
            <p className="text-justify text-xl font-popins pt-5">
              MSc Software Systems (2020-2025) - pursuing PSG College of Arts &
              Science, Bharathiar University – Coimbatore - 8.0 CGPA (up to 9th
              Semester)
            </p>
            <p className="text-4xl font-popins font-bold pt-8 ">EXPERIENCE</p>
            <p className="text-3xl font-popins font-bold ">INTERNSHIP</p>
            <p className="text-justify text-xl font-popins pt-5">
              UX researcher and 3D assistant intern at SHAMLA TECH SOLUTIONS Pvt
              Ltd <br /> 06/2023 – 11/2023 Coimbatore, India <br /> • As a
              junior 3D assistant, I worked on the following projects: Jewellery
              Shop, Yamaha Virtual Showroom, Confined Space VR Simulator, Fire
              and Safety Department Simulator, and Virtual Home Simulator.
              <br /> • As an UX researcher, I worked on company deck design, and
              assist with updating the company's website
            </p>
            <p className="text-4xl font-popins font-bold pt-8 ">PROJECTS</p>
            <p className="text-justify text-xl font-popins pt-5">
              Ebook web: Built an e-commerce website for eBooks using ReactJS,
              Tailwind CSS, and HTML5 for the frontend, with ExpressJS and a
              JSON file-based backend. Implemented features like user
              registration, login, add to cart, checkout, and account
              management. Focused on responsive design, state management, and
              ensuring both static and dynamic pages for seamless user
              experience. - WEBSITE
            </p>
            <p className="text-justify text-xl font-popins pt-5">
              Cine Mate: Developed a movie information web application using
              ReactJS, Tailwind CSS, and HTML5 for the frontend, with TMDB as
              the backend for fetching data. Implemented features to display
              popular, highly-rated, and upcoming films, along with a search
              function. Added functionality for users to switch between dark and
              light themes for a personalized experience. - WEBSITE
            </p>
            <p className="text-justify text-xl font-popins pt-5">
              A case study of UI/UX: Developed a technology consulting website
              leveraging Web 3.0 design, smart contract block chain technology,
              and AI-powered NLP for an intuitive search bar. Utilized Framer,
              Figma, Spline, and Blender for design and 3D elements. Focused on
              creating an easy-to-use, interactive user experience with advanced
              AI and block chain integration. - WEBSITE | DOCUMENT
            </p>
            <p className="text-4xl font-popins font-bold pt-8 ">SKILLS</p>
            <p className="text-3xl font-popins font-bold ">
              Technical Skills (Hard Skills)
            </p>
            <ul className="text-justify text-xl font-popins pt-5 list-disc">
              <li>
                Languages and Libraries: JavaScript ES6, HTML5, CSS3, NodeJs,
                Core Java
              </li>

              <li>
                Framework: ReactJs, ExpressJs, Tailwind CSS V3.0,
                Bootstrap,GSAP,Threejs
              </li>
              <li>API and Databases: REST API, MongoDB</li>
              <li>Testing: Postman, Thunder Client Extension</li>
            </ul>
            <p className="text-3xl font-popins font-bold pt-8 ">
              Soft Skills (Personal Attributes)
            </p>
            <ul className="text-justify text-xl font-popins pt-5 list-disc">
              <li>
                Communication & Collaboration: Effective verbal and written
                communication, active listening, and cross-functional team
                collaboration.
              </li>

              <li>
                Problem Solving & Analytical Thinking: Ability to analyse
                complex issues, devise solutions, and think critically to solve
                problems.
              </li>
              <li>
                Leadership & Time Management: Proven leadership experience,
                delegating tasks, managing multiple priorities, and adapting to
                shifting environments.
              </li>
            </ul>
            <p className="text-3xl font-popins font-bold pt-8 ">
              Certifications & Tools
            </p>
            <ul className="text-justify text-xl font-popins pt-5 list-disc">
              <li>
                Masai coding workshop: I built an Instagram feed page using HTML
                and CSS, React js
              </li>

              <li>
                Master class:– Become React Developer: React Core, Hooks,
                APIs,Routing, Context, Reducers, Redux, Firebase, Tailwind,
                Deployment
              </li>
            </ul>
            <p className="text-4xl font-popins font-bold pt-8 ">PORTFOLIOS</p>
            <ul className="text-left text-xl font-popins pt-5">
              <li className="text-wrap">
                <span className="font-bold  ">3D models: </span>
                <a
                  href="https://milton_vinciline_v.artstation.com/"
                  className="text-lg"
                >
                  https://milton_vinciline_v.artstation.com/
                </a>
              </li>
              <li>
                <span className="font-bold ">UI Design:</span>{" "}
                <a
                  href="https://www.behance.net/20mss025mlton"
                  className="text-lg"
                >
                  https://www.behance.net/20mss025mlton
                </a>
              </li>
            </ul>
            <p className="text-4xl font-popins font-bold pt-8 ">
              Extra-Curricular activities
            </p>
            <ul className="text-justify text-xl font-popins pt-5 list-disc ">
              <li>
                Department Secretary (Nov – May 2023): Appointed as the
                secretary for the department, overseeing administrative tasks,
                coordinating events, and maintaining communication between
                students and faculty
              </li>
              <li>
                Event Organizer for Gateway 2023 (Techno Fest): Led and
                organized the I/O Legends coding competition, managing event
                logistics, promoting participation, and ensuring smooth
                execution.
              </li>
              <li>
                Event Coordinator for International Women’s Day 2023: Organized
                and managed 7 events for the Centre for Women’s Studies,
                focusing on community engagement and promoting gender equality
              </li>
              <li>
                Graphic Designer for PSG_CAS_Confession Instagram: Currently
                designing visual content and creating engaging graphics for the
                Instagram page, contributing to brand consistency and audience
                engagement.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="min-h-[50rem] max-lg:min-h-[125rem] w-full flex justify-center items-end -translate-y-28 z-20 ">
        <a
          href="/MiltonVincilineResume.pdf"
          download="MiltonVincilineResume.pdf"
        >
          <button className="rounded-xl bg-blue-600 text-white p-3 px-5 text-2xl shadow-500 flex gap-3 justify-center items-center hover:scale-110 transform transition-all hover:duration-200  ">
            Download<i className="bi bi-cloud-arrow-down text-2xl"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
