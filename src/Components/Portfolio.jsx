import React from "react";
import carImg from "../assets/portfolio/car.png";
import shoppingImg from "../assets/portfolio/shopping.png";
import winter_img from "../assets/portfolio/winter.png";
import ecommerceImg from "../assets/portfolio/ecommerce.png";
import healthImg from "../assets/portfolio/health.png";
import traveling_img from "../assets/portfolio/traveling.png";
// import Testimonials from "./Testimonials";

const Portfolio = () => {
  document.title =
    "Joshan Services | Full Stack Web Developer | Portfolio Page";

  return (
    <>
      <div
        id="portfolio"
        className="max-w-[1536px] 2xl:m-auto animate__animated animate__slideInUp"
      >
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-24 mx-auto flex flex-wrap">
            <div className="mx-auto mb-10">
              <span className="section-title text-center font-bold main-text-color uppercase text-xl sm:text-2xl"
              >
               My Creations
              </span>
            </div>
            <div className="flex w-full mb-20 flex-wrap">
              <h2 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 fade-in-up delay-1s">
                My Work <span className="main-text-color">Journey</span>
              </h2>
              <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base fade-in-up delay-1-5s">
                Over the past 4 years, I’ve had the privilege of working on a
                variety of projects across industries. From e-commerce platforms
                to healthcare solutions, each project has been a learning
                experience and a chance to create something meaningful. Here’s a
                glimpse of my work!
              </p>
            </div>
            <div className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {/* Project 1: Car Marketplace */}
                  <div className="p-4 w-[100%] md:w-[48%] lg:w-[33%] fade-in-up delay-0.5s">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer">
                      <img
                        className="w-full object-cover object-center"
                        src={carImg}
                        alt="Car Marketplace"
                      />
                      <div className="p-6">
                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                          Car Marketplace
                        </h3>
                        <p className="leading-relaxed mb-3">
                          A sleek platform for buying and selling cars, designed
                          to make the process seamless and user-friendly. This
                          project highlights my ability to create intuitive
                          interfaces and robust back-end systems.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Project 2: Online Shopping Store */}
                  <div className="p-4 w-[100%] md:w-[48%] lg:w-[33%] fade-in-up delay-1s">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer">
                      <img
                        className="w-full object-cover object-center"
                        src={shoppingImg}
                        alt="Online Shopping Store"
                      />
                      <div className="p-6">
                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                          Online Shopping Store
                        </h3>
                        <p className="leading-relaxed mb-3">
                          An e-commerce site built to handle high traffic and
                          provide a smooth shopping experience. It showcases my
                          expertise in scalable solutions and performance
                          optimization.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Project 3: Winter Sports Hub */}
                  <div className="p-4 w-[100%] md:w-[48%] lg:w-[33%] fade-in-up delay-1.5s">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer">
                      <img
                        className="w-full object-cover object-center"
                        src={winter_img}
                        alt="Winter Sports Hub"
                      />
                      <div className="p-6">
                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                          Winter Sports Hub
                        </h3>
                        <p className="leading-relaxed mb-3">
                          A winter-themed platform for booking ski trips and
                          winter gear. This project demonstrates my creativity
                          and attention to detail in crafting engaging user
                          experiences.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Project 4: E-commerce Solutions */}
                  <div className="p-4 w-[100%] md:w-[48%] lg:w-[33%] fade-in-up delay-2s">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer">
                      <img
                        className="w-full object-cover object-center"
                        src={ecommerceImg}
                        alt="E-commerce Solutions"
                      />
                      <div className="p-6">
                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                          E-commerce Solutions
                        </h3>
                        <p className="leading-relaxed mb-3">
                          A comprehensive e-commerce platform with advanced
                          features like payment integration and inventory
                          management. It reflects my ability to deliver complex
                          solutions efficiently.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Project 5: Health & Wellness App */}
                  <div className="p-4 w-[100%] md:w-[48%] lg:w-[33%] fade-in-up delay-2.5s">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer">
                      <img
                        className="w-full object-cover object-center"
                        src={healthImg}
                        alt="Health & Wellness App"
                      />
                      <div className="p-6">
                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                          Health & Wellness App
                        </h3>
                        <p className="leading-relaxed mb-3">
                          A healthcare app designed to connect users with
                          wellness resources and track their health goals. This
                          project highlights my focus on usability and
                          accessibility.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Project 6: Travel Booking Platform */}
                  <div className="p-4 w-[100%] md:w-[48%] lg:w-[33%] fade-in-up delay-3s">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer">
                      <img
                        className="w-full object-cover object-center"
                        src={traveling_img}
                        alt="Travel Booking Platform"
                      />
                      <div className="p-6">
                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                          Travel Booking Platform
                        </h3>
                        <p className="leading-relaxed mb-3">
                          A travel website that simplifies booking flights,
                          hotels, and activities. It showcases my skills in
                          creating user-friendly interfaces and integrating
                          third-party APIs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <Testimonials />   */}
    </>
  );
};

export default Portfolio;
