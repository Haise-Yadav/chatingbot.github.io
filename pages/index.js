import Page from "@/components/page";
import center3 from "@/assets/center3.gif";
import Image from "next/image";
import background5 from "@/assets/background5.jpg";


export default function index() {
  return (
    <Page>
    <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-no-repeat"
         > <Image src={background5} alt="Background Image" />
        </div>
  
      <div className="relative flex pl-10 pt-10 text-white   ">
        <div className=" pt-36 w-1/3">
          <h1 className="text-9xl font-semibold text-[lkaros_sans] pl-12 h-[30vh]">
            ASH.
          </h1>
          <div className="flex flex-col h-[30vh] w-full ">
            <p className="text-2xl pl-12 h-10">The Chatbot for booking</p>
            <p className="text-2xl pl-12 ">Assistant</p>
            <ul className="list-none flex text-6xl text-[#ff5349] cursor-pointer pl-12 gap-7 h-11  ">
              <li className="opacity-20 hover:opacity-100">
                <p>.</p>
              </li>
              <li className="opacity-20 hover:opacity-100">
                <p>.</p>
              </li>
              <li className="opacity-20 hover:opacity-100">
                <p>.</p>
              </li>
              <li className="opacity-20 hover:opacity-100">
                <p>.</p>
              </li>
              <li className="opacity-20 hover:opacity-100">
                <p>.</p>
              </li>
              <li className="opacity-20 hover:opacity-100">
                <p>.</p>
              </li>
              <li className="opacity-20 hover:opacity-100">
                <p>.</p>
              </li>
            </ul>
          </div>
          <div className="h-[20vh] flex flex-col  gap-5">
            <ul className="list-none pl-10 pr-10 pt-5 flex items-center gap-5 font-[lkaros_sans]">
              <a
                href="#"
                className="font-[LEMON_MILK] text-3xl text-underline "
              >
                +1
              </a>
              <a href="#" className="hover:text-[#FF5349]">
                Mentions
              </a>
            </ul>
            <p className="pl-12">
              Find all our essential resources visit the 'TOOLS' section.
            </p>
          </div>
        </div>

        <div className=" w-1/2"></div>

        <div className="relative w-1/2 flex flex-col items-end p-16  ">
          <div className=" text-xl font-[LEMON_MILK] font-semibold  origin-center h-[26vh] rotate-90">
            <p>I-ASH</p>
            <p>THE WEBBASED PROJECT</p>
            <p className=" underline underline-offset-8">
              IN THE FIELD OF AL&ML
            </p>
          </div>
          <div className="flex flex-col justify-center p-16">
            <h1 className="text-[#a09696] text-xl">DETAILS</h1>
            <div className="flex text-[12px] gap-2">
              <p>
              "Our chatbot, named 'ASH,' is a sophisticated AI assistant designed to streamline your booking experience and provide efficient support."
              </p>
              <p>
              "Our chatbot utilizes NLP (Natural Language Processing) technology to enhance your booking experience and provide efficient support."
              </p>
            </div>
          </div>
          <div className="text-red-500 cursor-pointer">
            <h1>see more</h1>
          </div>
        </div>
        <div className=" w-20 flex flex-col justify-end ">
          <div className=" bg-red-500  ">
            {" "}
            <img src={"/"} className="p-3 cursor-pointer" alt="Down-arrow" />
          </div>
        </div>
      </div>
    </Page>
  );
}
