import { BsStars } from "react-icons/bs";
const Home3 = () => {
  return (
    <section className="bg-[#DFE9FF] py-16 flex flex-row">
  <div className="bg-[#FFFFFF] py-6 sm:w-2/4 w-10/12 mx-auto sm:px-16 px-4 rounded-lg flex flex-col">
    <h1 className="text-[#072785] sm:text-4xl text-2xl text-center font-semibold my-3 dm">
      Move from information to insights with{" "}
      <b className="text-[#072785] sm:text-4xl text-2xl text-center dm">PEx AI</b>
    </h1>
    <p className="text-xl text-black text-center my-4 inter">
      <b className="text-xl text-black text-center">Click here</b> to get matched with your{" "}
      <b className="text-xl text-black text-center">perfect property today!</b>
    </p>
  </div>

  <div className="bg-[#FFFFFF] py-6 sm:w-2/4 w-10/12 mx-auto sm:px-16 px-4 rounded-lg">

  
  <button className="flex flex-row justify-center items-center text-white bg-[#233B76] p-2 rounded-lg mx-auto my-3 dm h-12">
    <BsStars className="mr-3 " /> Begin Your Investment Journey
  </button>
  </div>
</section>

  );
};

export default Home3;
