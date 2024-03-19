import { FaArrowRight } from "react-icons/fa";
import Image1 from "./../../assets/bhutani.png";
import Image2 from "./../../assets/dla.png";
import Image3 from "./../../assets/elan.png";
import Image4 from "./../../assets/gy.png";
import Image5 from "./../../assets/mm.png";
import Product from "./../../assets/top-post-badge.svg";

import "./home.css";
import Marquee from "react-fast-marquee";
import Chatbot from "./chatbot/Chatbot";
const Home = () => {
  return (
    <section className="homepage pt-5">
      <div className="flex items-center justify-center w-fit mx-auto border-1 shadow-md rounded-full bg-[#ffffff] border-[#D6D6E6] p-2 my-5 mb-16 ">
        <p className="p-1 rounded-full px-5  sm:text-base text-[8px]  text-white bg-[#233B76] beviet">
          Get Listed
        </p>
        <p className="text-[#233B76] font-bold mx-1  sm:text-base text-[8px] beviet">
          Become Partner
        </p>
        <FaArrowRight className="text-[#233B76] font-bold mx-1" />
      </div>
      <h1 className="dm text-center text-2xl sm:text-5xl text-white sm:w-2/4 w-11/12 sm:text-center mx-auto font-semibold mt-[-20px]">
        <span className="text-[#fff068e9]">Empowering</span> everyone to <br />{" "}
        own and build <br /> <span className="text-[#fff068e9]">wealth</span>{" "}
        through <span className="text-[#fff068e9]">Real Estate</span>
      </h1>
      <p className="inter text-center text-sm sm:text-lg text-white sm:w-2/5 w-11/12 sm:text-center mx-auto my-3 sm:mb-24 mb-12">
        Discover perfect properties, connect directly with builders, and make
        informed investment decisions with ease - using advanced AI{" "}
      </p>
      <img
        src={Product}
        className="sm:mb-20 mb-20 sm:mt-[-55px] mt-[-25px] sm:w-2/12 w-2/5 block mx-auto"
        alt=""
      />
      <Chatbot />
      <div className=" bg-gradient-to-b from-transparent to-[#fefefe] bg-opacity-10 backdrop-blur-25px ">
        <div className="bg-[#FFFFFF] py-2 pb-5 px-10   sm:w-3/5 w-11/12 mx-auto rounded-lg border-5 border-[#BCBCBC] shadow-lg relative top-5 ">
          <p className="inter text-center font-semibold text-gray-600 my-3 text-lg">
            Trusted By Leaders From:
          </p>
          <Marquee
            pauseOnHover={true}
            pauseOnClick={true}
            speed={60}
            gradientWidth={50}
            gradient={true}
          >
            <img src={Image1} className="mx-10 py-1 sm:h-14 h-10" alt="" />
            <img src={Image2} className="mx-10 py-1 sm:h-14 h-10" alt="" />
            <img src={Image3} className="mx-10 py-1 sm:h-14 h-10" alt="" />
            <img src={Image4} className="mx-10 py-1 sm:h-14 h-10" alt="" />
            <img src={Image5} className="mx-10 py-1 sm:h-14 h-10" alt="" />
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Home;
