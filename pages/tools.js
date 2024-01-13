import Page from "@/components/page";
import { useState } from "react";
import Image from "next/image";


import Model from "@/assets/Model.svg";
import gptlog from "@/assets/gptlog.webp";
import MongoDB from "@/assets/MongoDB.webp";
import nextlogo from "@/assets/nextlogo.webp";
import githublog from "@/assets/githublog.svg";

export default function Tools() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [gptlog, nextlogo, MongoDB, Model, githublog];
  const Texts = [
    "ChatGPT is a valuable tool for project development, offering code generation, troubleshooting support, and creative problem-solving. Its natural language understanding and vast knowledge make it a versatile and accessible resource for both novice and experienced developers. It can assist in project planning, provide insights, and offer coding guidance, making it an invaluable partner in software and web development endeavors.",
    "Next.js is a popular and versatile JavaScript framework that simplifies the process of building modern web applications. Leveraging React for rendering and server-side rendering capabilities, Next.js offers a powerful development environment. It provides features like automatic code splitting, optimized routing, server-side rendering, and easy deployment. With built-in support for SEO, TypeScript, and CSS-in-JS, Next.js empowers developers to create high-performance, SEO-friendly, and scalable web projects efficiently.",
    "MongoDB is a robust NoSQL database system that revolutionizes data storage. It is designed to handle unstructured and semi-structured data, making it an excellent choice for modern, dynamic applications. MongoDB stores data in a flexible, document-oriented format, allowing developers to work with data in a more intuitive way. With features like horizontal scaling, high availability, and rich query capabilities, MongoDB has become a popular choice for a wide range of applications, from content management systems to real-time analytics and mobile app backends.",
    "NumPy, NLTK, TensorFlow, and Pickle are indispensable tools in the domains of data science, machine learning, and natural language processing. NumPy empowers efficient numerical computations, NLTK facilitates natural language processing tasks, TensorFlow enables the development of deep learning models, and Pickle simplifies the storage and retrieval of trained machine learning models. Together, these tools form the backbone of modern data-driven applications and research in these fields, allowing developers to manipulate data, process language, build advanced models, and seamlessly save and deploy them for practical use.",
    "GitHub is a leading web-based platform for version control and collaborative software development. It provides tools for managing, tracking, and sharing code repositories, making it a vital resource for developers and teams worldwide. GitHub enables efficient collaboration, offering features like pull requests, issues tracking, and seamless integration with popular development tools. Its social coding aspects, such as forking and contributing to open-source projects, foster a vibrant community of developers and enhance the software development process."
  ];

  const changeImage = (index) => {
    setCurrentIndex(index);
  };

  const renderIndexButtons = () => {
    return images.map((image, index) => (
      <button
        key={index}
        onClick={() => changeImage(index)}
        className={`index-button ${index === currentIndex ? "active" : ""}`}
      >
        {index + 1}
      </button>
    ));
  };

  return (
    <Page>

      <div className=" h-[100vh] w-full flex p-10 bg-gradient-to-br from-[#2C3E50] to-[#000000] text-white  z-50">
        <div className="w-1/4  h-full">
          <div className="h-1/2 w-full justify-center item-center p-10">
            <h1 className="font-['LEMON_MILK'] text-3xl font-normal leading-[4rem]">
              TOOLS.
            </h1>
            <p className="text-sm ">
            "In web-based projects, tools are the essential building blocks. They include development frameworks, content management systems, and design software that enable efficient project execution and user-friendly outcomes."
            </p>
          </div>
          <div className="h-1/2 w-full flex flex-col justify-center items-start  left-10 rotate-[270deg]">
            <h1 className="font-['LEMON_MILK'] text-3xl font-normal tracking-[12px] leading-[4rem]">
              PROJECT
            </h1>
            <h1 className="font-['LEMON_MILK'] text-3xl font-normal tracking-[12px] leading-[4rem]">
              FRAMEWORKS
            </h1>
            <h1 className="font-['LEMON_MILK'] text-3xl font-normal tracking-[11px] leading-[4rem] underline underline-offset-8">
              & RESOURCES
            </h1>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="flex h-full justify-center items-center p-10 ">
            <div className="w-full max-w-lg mx-auto flex flex-col gap-28 ">
              <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="w-full h-80 p-28 rounded overflow-hidden shadow-lg bg-white"
              />

              {currentIndex < images.length - 1 && (
                <Image
                  src={images[currentIndex + 1]}
                  alt={`Image ${currentIndex + 2} (Next)`}
                  className="h-40 w-1/2 p-12 text-gray-700  shadow-md  rounded-xl bg-clip-border "
                  onClick={() => changeImage(currentIndex + 1)}
                />
              )}
            </div>
            <div className="flex flex-col justify-around  items-center h-full">
              <div className="text-4xl flex flex-col gap-5 justify-center items-center font-['LEMON_MILK'] ease-out">
                {renderIndexButtons()}
                <div className="h-full flex flex-col pt-20 justify-center">
                  <h2 className="font-['LEMON_MILK'] text-3xl font-normal text-[#FF5349] tracking-[12px] leading-[4rem]">
                    Details.
                  </h2>
                  <p className="max-w-lg p-2 text-sm font-sans">
                    {Texts[currentIndex]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
