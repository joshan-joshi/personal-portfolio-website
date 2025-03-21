import { useState } from "react";  
import ScrollAnimation from "react-animate-on-scroll";  

const FAQS = () => {  
  const [expanded, setExpanded] = useState(Array(8).fill(false));  

  const toggleQuestion = (index) => {  
    const newExpanded = [...expanded];  
    newExpanded[index] = !newExpanded[index];  
    setExpanded(newExpanded);  
  };  

  const handleSupportClick = () => {  
    window.location.href = "/contact";  
  };  

  return (  
    <div className="py-10 bg-gray-50 sm:py-16 max-w-[1536px] 2xl:m-auto" id="faqs">  
    <div className="mx-auto mb-10 text-center">
    <span className="section-title text-center font-bold main-text-color uppercase text-xl sm:text-2xl">FAQ'S</span>
</div>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">  
        <div className="max-w-2xl mx-auto text-center">  
          <ScrollAnimation animateIn="animate__animated animate__slideInUp animate__delay-0.5s">  
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">  
              Explore <span className="main-text-color">Common Questions</span>  
            </h2>  
          </ScrollAnimation>  
        </div>  
        <div className="mt-12 space-y-6">  
          {/* FAQ 1 */}  
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp animate__delay-0.3s">  
            <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">  
              <button  
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"  
                onClick={() => toggleQuestion(0)}  
                aria-expanded={expanded[0]}  
                aria-controls="faq-answer-0"  
              >  
                <h3 className="font-semibold text-gray-800">What skills and technologies do you work with?</h3>  
                <span className="text-gray-500 bg-gray-100 rounded-full p-2">  
                  {expanded[0] ? (  
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />  
                    </svg>  
                  ) : (  
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V18M6 12L18 12" />  
                    </svg>  
                  )}  
                </span>  
              </button>  
              {expanded[0] && (  
                <div id="faq-answer-0">  
                  <hr className="border-gray-200" />  
                  <p className="p-6 text-gray-700">I work with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, and <strong>WordPress</strong>. These tools help me build modern, fast, and user-friendly websites.</p>  
                </div>  
              )}  
            </div>  
          </ScrollAnimation>  

          {/* FAQ 2 */}  
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp animate__delay-0.6s">  
            <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">  
              <button  
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"  
                onClick={() => toggleQuestion(1)}  
                aria-expanded={expanded[1]}  
                aria-controls="faq-answer-1"  
              >  
                <h3 className="font-semibold text-gray-800">How much experience do you have in web development?</h3>  
                <span className="text-gray-500 bg-gray-100 rounded-full p-2">  
                  {expanded[1] ? (  
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />  
                    </svg>  
                  ) : (  
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V18M6 12L18 12" />  
                    </svg>  
                  )}  
                </span>  
              </button>  
              {expanded[1] && (  
                <div id="faq-answer-1">  
                  <hr className="border-gray-200" />  
                  <p className="p-6 text-gray-700">I’ve been building websites and applications for over <strong>4 years</strong>. I’ve worked on everything from small business sites to complex web apps, giving me a solid understanding of both front-end and back-end development.</p>  
                </div>  
              )}  
            </div>  
          </ScrollAnimation>  

          {/* FAQ 3 */}  
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp animate__delay-0.9s">  
            <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">  
              <button  
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"  
                onClick={() => toggleQuestion(2)}  
                aria-expanded={expanded[2]}  
                aria-controls="faq-answer-2"  
              >  
                <h3 className="font-semibold text-gray-800">How long does it take to build a website?</h3>  
                <span className="text-gray-500 bg-gray-100 rounded-full p-2">  
                  {expanded[2] ? (  
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />  
                    </svg>  
                  ) : (  
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V18M6 12L18 12" />  
                    </svg>  
                  )}  
                </span>  
              </button>  
              {expanded[2] && (  
                <div id="faq-answer-2">  
                  <hr className="border-gray-200" />  
                  <p className="p-6 text-gray-700">Most websites take <strong>4 to 7 days</strong> to complete, depending on the complexity. I always prioritize quality and ensure your site is ready on time.</p>  
                </div>  
              )}  
            </div>  
          </ScrollAnimation>  

          {/* FAQ 4 */}  
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp animate__delay-1.2s">  
            <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">  
              <button  
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"  
                onClick={() => toggleQuestion(3)}  
                aria-expanded={expanded[3]}  
                aria-controls="faq-answer-3"  
              >  
                <h3 className="font-semibold text-gray-800">Can you customize a website to fit my needs?</h3>  
                <span className="text-gray-500 bg-gray-100 rounded-full p-2">  
                  {expanded[3] ? (  
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />  
                    </svg>  
                  ) : (  
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V18M6 12L18 12" />  
                    </svg>  
                  )}  
                </span>  
              </button>  
              {expanded[3] && (  
                <div id="faq-answer-3">  
                  <hr className="border-gray-200" />  
                  <p className="p-6 text-gray-700">Absolutely! I tailor every website to match your specific needs, whether it’s a unique design, special features, or specific functionality.</p>  
                </div>  
              )}  
            </div>  
          </ScrollAnimation>  

          {/* FAQ 5 */}  
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp animate__delay-1.5s">  
            <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">  
              <button  
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"  
                onClick={() => toggleQuestion(4)}  
                aria-expanded={expanded[4]}  
                aria-controls="faq-answer-4"  
              >  
                <h3 className="font-semibold text-gray-800">Do you offer ongoing support after the website is live?</h3>  
                <span className="text-gray-500 bg-gray-100 rounded-full p-2">  
                  {expanded[4] ? (  
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />  
                    </svg>  
                  ) : (  
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V18M6 12L18 12" />  
                    </svg>  
                  )}  
                </span>  
              </button>  
              {expanded[4] && (  
                <div id="faq-answer-4">  
                  <hr className="border-gray-200" />  
                  <p className="p-6 text-gray-700">Yes, I provide ongoing support to keep your website secure, updated, and running smoothly. Whether it’s fixing bugs or adding new features, I’ve got you covered.</p>  
                </div>  
              )}  
            </div>  
          </ScrollAnimation>  

          {/* FAQ 6 */}  
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp animate__delay-1.8s">  
            <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">  
              <button  
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"  
                onClick={() => toggleQuestion(5)}  
                aria-expanded={expanded[5]}  
                aria-controls="faq-answer-5"  
              >  
                <h3 className="font-semibold text-gray-800">How do you ensure my website is mobile-friendly and secure?</h3>  
                <span className="text-gray-500 bg-gray-100 rounded-full p-2">  
                  {expanded[5] ? (  
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />  
                    </svg>  
                  ) : (  
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V18M6 12L18 12" />  
                    </svg>  
                  )}  
                </span>  
              </button>  
              {expanded[5] && (  
                <div id="faq-answer-5">  
                  <hr className="border-gray-200" />  
                  <p className="p-6 text-gray-700">I use <strong>responsive design</strong> to make sure your site looks great on all devices. For security, I implement <strong>SSL encryption</strong>, regular backups, and keep all software up-to-date.</p>  
                </div>  
              )}  
            </div>  
          </ScrollAnimation>  

          {/* FAQ 7 - NEW */}  
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp animate__delay-2.1s">  
            <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">  
              <button  
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"  
                onClick={() => toggleQuestion(6)}  
                aria-expanded={expanded[6]}  
                aria-controls="faq-answer-6"  
              >  
                <h3 className="font-semibold text-gray-800">What if I need changes after the website is live?</h3>  
                <span className="text-gray-500 bg-gray-100 rounded-full p-2">  
                  {expanded[6] ? (  
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />  
                    </svg>  
                  ) : (  
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V18M6 12L18 12" />  
                    </svg>  
                  )}  
                </span>  
              </button>  
              {expanded[6] && (  
                <div id="faq-answer-6">  
                  <hr className="border-gray-200" />  
                  <p className="p-6 text-gray-700">No problem! I offer <strong>post-launch support</strong> to make updates or changes whenever you need them. Just let me know what you need, and I’ll take care of it.</p>  
                </div>  
              )}  
            </div>  
          </ScrollAnimation>  

          {/* FAQ 8 - NEW */}  
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp animate__delay-2.4s">  
            <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">  
              <button  
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"  
                onClick={() => toggleQuestion(7)}  
                aria-expanded={expanded[7]}  
                aria-controls="faq-answer-7"  
              >  
                <h3 className="font-semibold text-gray-800">How do you handle website hosting and domain setup?</h3>  
                <span className="text-gray-500 bg-gray-100 rounded-full p-2">  
                  {expanded[7] ? (  
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />  
                    </svg>  
                  ) : (  
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V18M6 12L18 12" />  
                    </svg>  
                  )}  
                </span>  
              </button>  
              {expanded[7] && (  
                <div id="faq-answer-7">  
                  <hr className="border-gray-200" />  
                  <p className="p-6 text-gray-700">I can help you with <strong>hosting</strong> and <strong>domain setup</strong> if needed. I’ll guide you through the process or handle it for you, ensuring your site is live and accessible.</p>  
                </div>  
              )}  
            </div>  
          </ScrollAnimation>  
        </div>  

        <ScrollAnimation animateIn="animate__animated animate__fadeInUp delay-0-5s" animateOut="animate__animated animate__fadeOutDown delay-0-5s">  
          <p className="text-center text-gray-600 text-base mt-9">  
            Still have questions? &nbsp;  
            <span  
              className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover:underline"  
              onClick={handleSupportClick}  
            >  
              Contact our support  
            </span>  
          </p>  
        </ScrollAnimation>  
      </div>  
    </div>  
  );  
};  

export default FAQS;  