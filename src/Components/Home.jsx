import React from "react";
// import Testimonials from "./Testimonials.jsx"
import FAQS from "./FAQS.jsx";
import "animate.css";
import mainPageGIF from "../assets/home/Main_GIF.gif";
import Inspirational_Quotes from "./Inspirational_Quotes.jsx";

const Home = () => {
  document.title =
    "Joshan Joshi | Full-Stack Developer | WordPress & SEO Expert";

  const handleViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1_BZ9-nfg6TCNyXFSzwiTp42BVznXIzME/view",
      "_blank"
    );
  };

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/joshan-dev", "_blank");
  };

  return (
    <>
      <div id="home" className="max-w-[1536px] 2xl:m-auto bg-[#e0e3eabd]">
        <section className="text-gray-600 body-font">
          <div className="container flex-col xl:flex-row mx-auto flex sm:px-5 px-[0.7rem] py-24 lg:py-32 items-center">
            <div className="lg:flex-grow w-full xl:w-1/2 xl:pr-24 flex flex-col xl:items-start xl:text-left mb-16 xl:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-semibold animate__animated animate__fadeInUp">
                <span className="main-text-color font-bold text-3xl sm:text-[2.53rem]">
                  Design <span className="text-black"> , </span> Code{" "}
                </span>{" "}
                &{" "}
                <span className="main-text-color font-bold text-3xl sm:text-[2.53rem]">
                  Launch
                </span>{" "}
                <span> Your Stunning</span>
                <br className="inline-block lg:contents" />{" "}
                <span className="main-text-color font-bold text-3xl sm:text-[2.53rem]">
                  Dream Website
                </span>{" "}
                <span> Today! </span>
              </h1>
              {/* <p className="mb-8 leading-relaxed animate__animated animate__fadeInUp delay-0-5s">
                Welcome to my Portfolio! I&#39;m a Full Stack Developer specializing in <strong>Responsive Web Design</strong> for businesses. Skilled in Front-end and Back-end development, I create scalable Server-side Applications. Check out my portfolio to see my work and discover how I can help your business with <strong>Web Development Services</strong>!
              </p> */}
              <p className="mb-8 leading-relaxed animate__animated animate__fadeInUp delay-0-5s">
                {" "}
                Are you <strong>Struggling</strong> with your{" "}
                <strong>Online Business </strong>? I’m here to help! Together,
                we can develop a <strong>Website</strong> that not only enhances
                your <strong>Digital Presence</strong> but also drives{" "}
                <strong>Growth</strong> and <strong>Success</strong>. Let’s
                unlock your business’s <strong>Full Potential</strong>!
              </p>
              <div className="flex justify-center animate__animated animate__fadeInUp delay-1s">
                <button
                  className="inline-flex text-white main-bg-color border-0 py-2 px-6 focus:outline-none rounded text-lg hover:bg-black transition-all duration-500"
                  onClick={handleViewResume}
                >
                  View Resume
                </button>
                <button
                  className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none rounded text-lg hover:bg-gray-300 transition-all duration-500"
                  onClick={handleLinkedIn}
                >
                  Linked In
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate__animated animate__delay-1s animate__fadeInBottomRight">
              <img className="object-cover object-center rounded mix-blend-multiply" alt="Main Image" src={mainPageGIF}/>
            </div>
            {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate__animated animate__delay-1s animate__fadeInBottomRight">
              <video
                className="object-cover object-center rounded mix-blend-multiply"
                autoPlay
                loop
                muted
                playsInline
                controls={false} // Set to true if you want video controls
                alt="Main Video"
              >
                <source src={"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXUwOHcybHM0Zzh1ZWNkMWJ6ZjBhZXUxbDh3cG9kZGZ1Z29uZzRuMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div> */}
          </div>
        </section>
      </div>
      <Inspirational_Quotes />
      <FAQS />
      {/* <Testimonials/> */}
    </>
  );
};

export default Home;
