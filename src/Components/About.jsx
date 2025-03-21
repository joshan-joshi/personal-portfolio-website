import React, { useEffect } from 'react';  
import Contact from "./Contact.jsx";  
import my_Img from "../assets/about/about.jpg";  

const About = () => {  
  useEffect(() => {  
    document.title = "Joshan Services | Full Stack Web Developer | About Page";  
  }, []);  

  return (  
    <>  
      <div  
        id="about"  
        className="flex flex-col sm:flex-row items-center max-w-[1536px] 2xl:m-auto scroll-my-12 animate__animated animate__pulse p-6 sm:p-10"  
      >  
        {/* Image Section */}  
        <div className="sm:w-1/2 p-4 sm:p-6">  
          <div className="image object-center text-center transform transition-all duration-300 hover:scale-105">  
            <img  
              src={my_Img}  
              alt="Full_Stack_Developer_WordPress_Developer_SEO_Expert"  
            />  
          </div>  
        </div>  

        {/* Text Section */}  
        <div className="sm:w-1/2 p-4 sm:p-6">  
          <div className="text">  
            <span className="section-title text-center font-bold main-text-color uppercase text-xl sm:text-2xl">  
              About Me  
            </span>  

            <h2 className="mb-4 mt-6 font-bold text-3xl sm:text-4xl">  
              Joshan <span className="main-text-color">Joshi</span>  
            </h2>  
            <p className="text-gray-700 leading-relaxed">  
              I’m a Full-Stack Web Developer who loves building things for the web. Over the years, I’ve worked with technologies like <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React.js</strong> (including Next.js), <strong>Node.js</strong> (Express.js), <strong>MongoDB</strong>, <strong>WordPress</strong>, and <strong>SEO</strong>. My focus is on creating <strong>Responsive Designs</strong> and scalable backend systems that not only look great but also work seamlessly for users.  
            </p>  
            <p className="text-gray-700 mt-4 leading-relaxed">  
              What drives me is helping businesses grow by establishing a strong online presence. I believe in using the latest tools and techniques to deliver solutions that go beyond expectations. Whether you need a <strong>Freelance Web Developer</strong> or a complete project overhaul, I’m here to make sure your goals are met with creativity and precision.  
            </p>  
          </div>  
        </div>  
      </div>  
      <Contact />  
    </>  
  );  
};  

export default About;  