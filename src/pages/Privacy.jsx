import React from "react";

const Privacy = () => {
  return (
    <div className="container mx-auto  dark:bg-black dark:text-white ">
      <div className="pt-48  font-popins font-lg px-20">
        <p className="text-2xl">Privacy policy</p>
        <p className="mb-10">Effective Date: 01/01/2025</p>
        <p className="text-lg">1. Information We Collect</p>
        <p className="mt-1">
          When you contact us through our website, we collect the following
          information:
        </p>
        <br></br>
        <ol className="flex flex-col gap-2">
          <li>
            <i className="bi bi-cursor-fill text-amber-500"></i> Username
          </li>
          <li>
            <i className="bi bi-cursor-fill text-amber-500"></i> Email address
          </li>
          <li>
            <i className="bi bi-cursor-fill text-amber-500"></i> Subject of your
            message
          </li>
          <li>
            <i className="bi bi-cursor-fill text-amber-500"></i> Message content
          </li>
        </ol>
        <p className="mt-7 text-lg">2. How We Use Your Information</p>
        <p className="mt-1"> We use your information to:</p>
        <br></br>
        <ol className="flex flex-col gap-2">
          <li>
            <i className="bi bi-cursor-fill text-amber-500"></i> Respond to your
            messages and inquiries
          </li>
          <li>
            <i className="bi bi-cursor-fill text-amber-500"></i> Provide
            customer support
          </li>
          <li>
            <i className="bi bi-cursor-fill text-amber-500"></i> Improve our
            website
          </li>
        </ol>
        <p className="mt-7 text-lg">3. How We Protect Your Information</p>
        <p className="mt-1">
          We take reasonable steps to protect your personal information from
          unauthorized access or misuse. However, please be aware that no method
          of online communication is 100% secure.
        </p>
        <p className="mt-7 text-lg">4. Sharing Your Information</p>
        <p className="mt-1">
          We do not sell, rent, or share your personal information with third
          parties, except as required by law or to respond to your requests.
        </p>
        <p className="mt-7 text-lg">5. Cookies</p>
        <p className="mt-1">
          We do not use cookies or track user activity on this website.
        </p>
        <p className="mt-7 text-lg">6. Your Rights</p>
        <p className="mt-1">
          You have the right to request access to, or deletion of, your personal
          information. If you would like to update or remove your information,
          please contact us at{" "}
          <span>
            <a
              className="text-blue-500"
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=miltonvinciline08@gmail.com"
            >
              @miltonvinciline08@gmail.com
            </a>
          </span>
          .
        </p>
        <p className="mt-7 text-lg">7. Changes to This Privacy Policy</p>
        <p className="mt-1">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date.
        </p>
        <p className="mt-7 text-lg">8. Third-Party Services and Tools</p>
        <p className="mt-1">
          I use several third-party services, libraries, and tools that may
          interact with your data or enhance the functionality of this website.
          Below is a list of the key services and tools I use, along with their
          respective privacy policies:
        </p>
        <p className="mt-1 text-base">The services and tools I use include:</p>
        <ol className="flex flex-col gap-2">
          <li className="font-bold">
            <i className="bi bi-cursor-fill text-amber-500"></i> Google Fonts{" "}
            <p className="font-normal">
              Google Fonts is used to enhance the visual appearance of this
              website. Google Fonts is a collection of free and open-source
              fonts provided by Google. Google may collect usage data when you
              visit the site. For more details, please read their{" "}
              <a
                href="https://developers.google.com/fonts/faq/privacy"
                className="text-blue-500"
              >
                Privacy Policy.
              </a>
            </p>
          </li>
          <li className="font-bold">
            <i className="bi bi-cursor-fill text-amber-500"></i> GSAP (GreenSock
            Animation Platform){" "}
            <p className="font-normal">
              GSAP is a JavaScript library used to create animations on this
              website. It is a powerful, high-performance tool that does not
              collect user data.
            </p>
          </li>
          <li className="font-bold">
            <i className="bi bi-cursor-fill text-amber-500"></i> Free Music{" "}
            <p className="font-normal">
              "Minimal Corporate" by Aylex is used as background music for this
              website. This music is provided free for use under the terms
              outlined by{" "}
              <a href="https://freetouse.com/music" className="text-blue-500">
                freetouse.com.
              </a>
            </p>
          </li>
          <li className="font-bold">
            <i className="bi bi-cursor-fill text-amber-500"></i> Bootstrap Icons{" "}
            <p className="font-normal">
              I use Bootstrap Icons for various icons across the website.
              Bootstrap Icons is an open-source library of icons provided by the
              Bootstrap team. These icons are used purely for design purposes
              and do not collect any user data.
            </p>
          </li>
        </ol>
        <p className="mt-7 text-lg">9. Contact Us</p>
        <p className="mt-1">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <br></br>
        <ol className="flex flex-col gap-2">
          <li>
            <i className="bi bi-cursor-fill text-amber-500"></i> Milton
            Vinciline V
          </li>
          <li>
            <i className="bi bi-cursor-fill text-amber-500"></i>{" "}
            miltonvinciline08@gmail.com
          </li>
          <li>
            <i className="bi bi-cursor-fill text-amber-500"></i> India
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Privacy;
