import Page from "@/components/page";
import Image from "next/image";

import aboutus from "@/assets/aboutus2.jpg";

export default function About() {
  return (
    <Page>
      <div className="h-[100vh] flex bg-gradient-to-br from-[#2C3E50] to-[#000000] text-white p-1" >
        <div className="w-1/2 h-full flex flex-col justify-between">
          <div className="pt-28 pl-24 max-w-sm text-sm">
            <p className="">
              {" "}
              rerum sint error repudiandae voluptates, qui ducimus minima
              corrupti!
            </p>
          </div>
          <div className="flex pl-10 justify-center items-center ">
            <Image className="h-[74vh] w-[50vh]" src={aboutus} alt="image" />
          </div>
        </div>
        <div className="w-full h-full ">
          <div className="max-h-max w-1/2 pt-28 pr-8 text-sm ">
            <p>
              {" "}
              Error odio iste ipsa animi voluptas voluptate placeat porro, ipsa!
              Magnam nobis distinctio asperiores alias molestias soluta!
            </p>
          </div>
          <div className="max-h-max w-full pt-20 pr-8 flex flex-col justify-between gap-16">
            <h2 className="font-['LEMON_MILK'] text-5xl font-normal  tracking-[12px] leading-[4rem]">
              Details.
            </h2>
            <p className="max-w">
              {" "}
              "The chatbot for ordering food is an innovative solution that
              leverages a combination of cutting-edge technologies to enhance
              the user experience. Built on a foundation of Next.js, a powerful
              React framework, this chatbot provides a seamless and interactive
              platform for users to place food orders. The chatbot's core
              intelligence is powered by Dialogflow, which employs natural
              language processing to understand and respond to user queries
              effectively. Behind the scenes, a robust SQL database stores menu
              items, user profiles, and order histories, ensuring efficient data
              management and retrieval. Python scripts handle the intricate
              order processing and restaurant communication. Moreover, the
              chatbot incorporates YouTube integration for showcasing video
              tutorials on how to use the service and explore culinary delights.
              Lastly, ChatGPT contributes valuable assistance in answering user
              inquiries and providing relevant information, making the chatbot a
              versatile and customer-centric tool for food enthusiasts."
            </p>
            <div className="flex  justify-between items-center pr-10 pb-10">
              <div classname="max-w-lg">
                {" "}
                <h1 className="font-[LEMON_MILK] text-xl leading-[3rem]">
                  Group
                </h1>
                <p className="text-sm">
                  lorem nianoi noansodjn a onasjon apsmd onabsdn asond bsablbd
                  aidbcn cj
                </p>
              </div>
              <div classname="max-w-lg">
                <h1 className="font-[LEMON_MILK] text-xl leading-[3rem]">
                  Group
                </h1>
                <p className="text-sm">
                  lorem nianoi noansodjn a onasjon apsmd onabsdn asond bsablbd
                  aidbcn cj
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <hr className="w-2/3  border border-[#FF5349]" />
          </div>

          <div className="h-1/4 w-full">
            <div className="flex h-full w-full justify-evenly items-center gap-10">
              <div classname="max-w-sm">
                {" "}
                <h2 className="text-xl font-['karos_sans'] font-semibold  leading-[4rem]">
                  Harsh
                </h2>
                <p className="text-sm opacity-50 ">
                  lorem nianoi noansodjn a onasjon apsmd onabsdn asond bsablbd
                  aidbcn cj
                </p>
              </div>
              <div classname="max-w-sm">
                <h2 className="text-xl font-['karos_sans'] font-semibold  leading-[4rem]">
                  Anubhav
                </h2>
                <p className="text-sm opacity-50">
                  lorem nianoi noansodjn a onasjon apsmd onabsdn asond bsablbd
                  aidbcn cj
                </p>
              </div>
              <div classname="max-w-sm">
                <h2 className="text-xl font-['karos_sans'] font-semibold leading-[4rem]">
                  Shaksham
                </h2>
                <p className="text-sm opacity-50">
                  lorem nianoi noansodjn a onasjon apsmd onabsdn asond bsablbd
                  aidbcn cj
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
