import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ScrollAnimation from "react-animate-on-scroll";

const Testimonials = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div id="testimonials" className="py-16 max-w-[1536px] 2xl:m-auto">
      <div className="mx-auto py-16 text-center">
        <span className="section-title text-center font-bold main-text-color uppercase text-xl sm:text-2xl">
          Client Testimonials
        </span>
      </div>
      <div className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <ScrollAnimation animateIn="animate__animated animate__slideInUp animate__delay-0.5s">
            <h1 className="text-3xl title-font text-gray-900 mb-20 text-center font-bold">
              What <span className="main-text-color">Clients</span> Say About Our{" "}
              <span className="main-text-color">Web Development</span>
            </h1>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="animate__animated animate__fadeInUp delay-0-5s">
          <div className="container mx-auto">
            <Swiper
              spaceBetween={30}
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper"
            >
              {[
                {
                  desc: "As a small business owner, I needed a professional website to showcase my services. Joshan not only delivered a stunning design but also made sure it was easy to navigate and optimized for search engines. I couldn’t be happier with the results!",
                  name: "Sarah Imran",
                  title: "Small Business Owner",
                },
                {
                  desc: "Joshan was recommended to me for a WordPress project, and they did not disappoint. They delivered high-quality work on time and were always available for questions. Their expertise and professionalism are top-notch.",
                  name: "Tracy Hadiya",
                  title: "Marketing Director",
                },
              ].map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="relative mb-12 p-8 bg-gradient-to-r from-[#f9f9f9] to-[#e0e0e0] rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 group">
                    {/* Timeline Dot */}
                    <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-main-color rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-lg text-gray-600 italic mb-5">
                        <span className="text-[2.5rem] leading-none align-middle text-gray-400">
                          "
                        </span>
                        {testimonial.desc}
                        <span className="text-[2.5rem] leading-none align-middle text-gray-400">
                          "
                        </span>
                      </p>
                      <h2 className="text-xl main-text-color font-semibold text-center">
                        {testimonial.name}
                      </h2>
                      <p className="text-gray-600 text-center">{testimonial.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Testimonials;
