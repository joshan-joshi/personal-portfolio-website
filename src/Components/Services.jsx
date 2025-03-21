import React from 'react';  
// import Testimonials from "./Testimonials";  

const Services = () => {  

  document.title = "Joshan Services | Full Stack Web Developer | Services Page"  
  return (  
    <>  
      <div  
        id="services"  
        className="bg-[#fbfbfb] px-2 py-10 my-16 max-w-[1536px] 2xl:m-auto"  
      >  
        <div id="features" className="mx-auto max-w-6xl">  
          <div className="text-center mb-10 mt-4">  
            <span className="section-title text-center font-bold main-text-color uppercase text-xl sm:text-2xl">  
              Web Dev Services  
            </span>  
          </div>  
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl animate__animated fade-in-up delay-500">  
            Creative &nbsp;  
            <span className="main-text-color">Development Solutions</span>  
          </h2>  
          <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">  
            <li className="rounded-xl transition-all duration-1000 ease-in-out hover:scale-105 cursor-pointer bg-white px-6 py-8 shadow-sm fade-in-up hover:bg-[#c6c5f5]">  
              <img  
                src="https://cdn4.iconfinder.com/data/icons/technology-83/1000/app_frontend_end_front_front-end_front_end_development-512.png"  
                alt="Front-End Development"  
                className="mx-auto h-10 w-10"  
              />  
              <h3 className="my-3 font-display font-medium main-text-color">  
                Front-End Development  
              </h3>  
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">  
                I create websites that look great and work smoothly on any device. Using HTML, CSS, and JavaScript, I focus on making your site visually appealing and easy to navigate.  
              </p>  
            </li>  

            <li className="rounded-xl transition-all duration-1000 ease-in-out hover:scale-105 cursor-pointer bg-white px-6 py-8 shadow-sm fade-in-up delay-0-5s hover:bg-[#c6c5f5]">  
              <img  
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHTHSPLQqPXo5tXMDj30Kd1W2IYwiRFMjlQ&s"  
                alt="Back-End Development"  
                className="mx-auto h-10 w-10"  
              />  
              <h3 className="my-3 font-display font-medium main-text-color">  
                Back-End Development  
              </h3>  
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">  
                I build the backbone of your website using Node.js, Express.js, and MongoDB. Whether it’s handling data or managing traffic, I ensure your site runs smoothly and efficiently.  
              </p>  
            </li>  

            <li className="rounded-xl transition-all duration-1000 ease-in-out hover:scale-105 cursor-pointer bg-white px-6 py-8 shadow-sm fade-in-up delay-1s hover:bg-[#c6c5f5]">  
              <img  
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXkRXz5qRMZOKdhOk0D4aV78X-DvqDRJN3A&s"  
                alt="API Development"  
                className="mx-auto h-10 w-10"  
              />  
              <h3 className="my-3 font-display font-medium main-text-color">  
                API Development  
              </h3>  
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">  
                I design and build APIs that connect your website to other systems. Using Next.js, React.js, and WordPress, I make sure your APIs are secure, scalable, and easy to use.  
              </p>  
            </li>  

            <li className="rounded-xl transition-all duration-1000 ease-in-out hover:scale-105 cursor-pointer bg-white px-6 py-8 shadow-sm fade-in-up delay-1-5s hover:bg-[#c6c5f5]">  
              <img  
                src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/mongodb.svg"  
                alt="MongoDB Development"  
                className="mx-auto h-10 w-10"  
              />  
              <h3 className="my-3 font-display font-medium main-text-color">  
                MongoDB Development  
              </h3>  
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">  
                I set up and optimize MongoDB databases to handle your data efficiently. From query optimization to data modeling, I ensure your database performs at its best.  
              </p>  
            </li>  

            <li className="rounded-xl transition-all duration-1000 ease-in-out hover:scale-105 cursor-pointer bg-white px-6 py-8 shadow-sm fade-in-up delay-2s hover:bg-[#c6c5f5]">  
              <img  
                src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/wordpress.svg"  
                alt="WordPress Development"  
                className="mx-auto h-10 w-10"  
              />  
              <h3 className="my-3 font-display font-medium main-text-color">  
                WordPress Development  
              </h3>  
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">  
                I customize and build WordPress themes and plugins to fit your needs. Whether it’s improving performance, enhancing security, or optimizing for SEO, I’ve got you covered.  
              </p>  
            </li>  

            <li className="rounded-xl transition-all duration-1000 ease-in-out hover:scale-105 cursor-pointer bg-white px-6 py-8 shadow-sm fade-in-up delay-2-5s hover:bg-[#c6c5f5]">  
              <img  
                src="https://cdn-icons-png.flaticon.com/512/2977/2977742.png"  
                alt="Search Engine Optimization"  
                className="mx-auto h-10 w-10"  
              />  
              <h3 className="my-3 font-display font-medium main-text-color">  
                Search Engine Optimization (SEO)  
              </h3>  
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">  
                I help your website rank higher on search engines. Through keyword research and site optimization, I aim to increase your traffic, credibility, and overall success.  
              </p>  
            </li>  
          </ul>  
        </div>  
      </div>  
      {/* <Testimonials />   */}
    </>  
  );  
};  

export default Services;  