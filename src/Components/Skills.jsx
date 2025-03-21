import { useState, useEffect } from "react";
import FAQS from "./FAQS";

const Skills = () => {
  document.title = "Joshan Services | Full Stack Web Developer | Skills";

  const [progress, setProgress] = useState({
    html: 0,
    css: 0,
    javascript: 0,
    typescript: 0,
    react: 0,
    next: 0,
    node: 0,
    express: 0,
    mongo: 0,
    wordpress: 0,
    seo: 0,
  });

  useEffect(() => {
    const animateProgress = () => {
      const targetValues = {
        html: 70,
        css: 80,
        javascript: 75,
        typescript: 60,
        react: 75,
        next: 60,
        node: 70,
        express: 60,
        mongo: 75,
        wordpress: 80,
        seo: 75,
      };

      Object.keys(targetValues).forEach((key) => {
        let currentValue = 0;
        const intervalId = setInterval(() => {
          currentValue += 1;
          setProgress((prevProgress) => ({
            ...prevProgress,
            [key]: currentValue,
          }));
          if (currentValue >= targetValues[key]) {
            clearInterval(intervalId);
          }
        }, 10);
      });
    };
    animateProgress();
  }, []);

  return (
    <>
      <div
        id="skills"
        className="w-[90vw] mx-auto max-w-[1536px] 2xl:m-auto mt-10 mb-28"
      >
       <div className="mx-auto py-16 text-center">
  <span className="section-title text-center font-bold main-text-color uppercase text-xl sm:text-2xl">
    My Expertise
  </span>
</div>
        <div className="lg:mx-16 mb-16">
          <p className="text text-gray-800 text-center animate__animated animate__fadeInDown">
          <p className="text text-gray-800 text-center animate__animated animate__fadeInDown">
  I love building <strong>Websites</strong> and <strong>Applications</strong> that look great and work smoothly. Whether it’s creating <strong>Responsive Front-Ends</strong> or building <strong>Powerful Back-Ends</strong>, I’m passionate about turning ideas into reality. Let’s work together to create something truly <strong>Amazing</strong>.
</p>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* HTML */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📄</span>
                <h3 className="text-xl font-semibold text-gray-800">HTML</h3>
              </div>
              <span className="text-lg font-semibold text-gray-800">
                {progress.html}%
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                style={{
                  width: `${progress.html}%`,
                  transition: "width 1.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>

          {/* CSS */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🎨</span>
                <h3 className="text-xl font-semibold text-gray-800">CSS</h3>
              </div>
              <span className="text-lg font-semibold text-gray-800">
                {progress.css}%
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                style={{
                  width: `${progress.css}%`,
                  transition: "width 1.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>

          {/* JavaScript */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🟨</span>
                <h3 className="text-xl font-semibold text-gray-800">
                  JavaScript
                </h3>
              </div>
              <span className="text-lg font-semibold text-gray-800">
                {progress.javascript}%
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"
                style={{
                  width: `${progress.javascript}%`,
                  transition: "width 1.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>

          {/* TypeScript */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🟦</span>
                <h3 className="text-xl font-semibold text-gray-800">
                  TypeScript
                </h3>
              </div>
              <span className="text-lg font-semibold text-gray-800">
                {progress.typescript}%
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-700 to-blue-800 rounded-full"
                style={{
                  width: `${progress.typescript}%`,
                  transition: "width 1.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>

          {/* React Js */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">⚛️</span>
                <h3 className="text-xl font-semibold text-gray-800">React Js</h3>
              </div>
              <span className="text-lg font-semibold text-gray-800">
                {progress.react}%
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                style={{
                  width: `${progress.react}%`,
                  transition: "width 1.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>

          {/* Next Js */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: "1.8s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🚀</span>
                <h3 className="text-xl font-semibold text-gray-800">Next Js</h3>
              </div>
              <span className="text-lg font-semibold text-gray-800">
                {progress.next}%
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                style={{
                  width: `${progress.next}%`,
                  transition: "width 1.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>

          {/* Node Js */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: "2.1s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📡</span>
                <h3 className="text-xl font-semibold text-gray-800">Node Js</h3>
              </div>
              <span className="text-lg font-semibold text-gray-800">
                {progress.node}%
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"
                style={{
                  width: `${progress.node}%`,
                  transition: "width 1.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>

          {/* Express Js */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: "2.4s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🚂</span>
                <h3 className="text-xl font-semibold text-gray-800">
                  Express Js
                </h3>
              </div>
              <span className="text-lg font-semibold text-gray-800">
                {progress.express}%
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"
                style={{
                  width: `${progress.express}%`,
                  transition: "width 1.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>

          {/* MongoDB */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: "2.7s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🗄️</span>
                <h3 className="text-xl font-semibold text-gray-800">MongoDB</h3>
              </div>
              <span className="text-lg font-semibold text-gray-800">
                {progress.mongo}%
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                style={{
                  width: `${progress.mongo}%`,
                  transition: "width 1.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>

          {/* WordPress */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: "3s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📝</span>
                <h3 className="text-xl font-semibold text-gray-800">
                  WordPress
                </h3>
              </div>
              <span className="text-lg font-semibold text-gray-800">
                {progress.wordpress}%
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"
                style={{
                  width: `${progress.wordpress}%`,
                  transition: "width 1.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>

          {/* SEO */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: "3.3s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🔍</span>
                <h3 className="text-xl font-semibold text-gray-800">SEO</h3>
              </div>
              <span className="text-lg font-semibold text-gray-800">
                {progress.seo}%
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-gray-500 to-gray-600 rounded-full"
                style={{
                  width: `${progress.seo}%`,
                  transition: "width 1.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <FAQS />
    </>
  );
};

export default Skills;