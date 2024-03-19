import { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import { RiStarSLine } from "react-icons/ri";
// import { FaUserCircle } from "react-icons/fa";
import Copilot from "./../../../assets/copilot.jpg";
import Profile from "./../../../assets/profile.jpeg";
import { CiCamera } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";



import newindiagate from "./../../../assets/newindiagate.png";
import newbuilding from "./../../../assets/newbuilding.jpg";


import newproject2 from "./../../../assets/newproject2.png";


function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dataShow, setDataShow] = useState(false);
  
  const [chatbotResponse, setChatbotResponse] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [showText, setShowText] = useState("");


  const fetchChatbotResponse = async (message) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://proexchatbot.onrender.com/chat",
        { user_input: message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const chatHistory = response.data.chat_history;
      console.log("chat history", chatHistory);

      if (
        chatHistory &&
        Array.isArray(chatHistory) &&
        chatHistory.length >= 2
      ) {
        setChatbotResponse(chatHistory[1].content); // Store the chatbot response
        setDataShow(true); // Set data show flag
      } else {
        console.error("Invalid chat history format:", chatHistory);
        // Handle error for invalid response format
      }
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      // Handle error for network or server issues
    } finally {
      setIsLoading(false);
      setInputText("");
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handledatashow();
    if (inputText.trim() !== "") {
      fetchChatbotResponse(inputText.trim());
      setInputText("");
    }
  };
  const handleButtonClick = (value) => {
    handledatashow();
    setInputText(value);
    fetchChatbotResponse(value);
    setShowText(value);
  };
  const handledatashow = () => {
    setDataShow(true);
  };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (chatbotResponse) {
      const initialChars = chatbotResponse.substring(0, 2); // Reveal first two characters
      const newMessages = [...messages];
      newMessages.push({ text: initialChars, isUser: false });
      setMessages(newMessages);
  
      let currentChar = 2; // Start from the third character
  
      const typingInterval = setInterval(() => {
        if (currentChar < chatbotResponse.length) {
          const newMessages = [...messages];
          newMessages.push({
            text: chatbotResponse.substring(0, currentChar + 1),
            isUser: false,
          });
          setMessages(newMessages);
          currentChar++;
        } else {
          clearInterval(typingInterval);
        }
      }, 20); // Adjust typing speed as desired (milliseconds)
  
      // Cleanup function to clear the interval on unmount
      return () => clearInterval(typingInterval);
    }
  }, [chatbotResponse]);

  return (
    <div className="dm mx-auto sm:w-2/4 w-11/12 bg-[#FFFFFF] py-2 px-1 bg-opacity-100 mb-16 rounded-lg border-1 border-[#D6D6E6]">
      {isLoading ? (
        <>
        <div className="flex flex-row justify-start items-center text-lg my-2 mx-1">
          <p className="font-weight: 500">User: {inputText} </p>
          
        </div>
        <div>
          <p className="flex flex-row justify-start items-center text-lg my-2 mx-1">Searching...</p>
        </div>
        </>
      ) : dataShow ? (
        <div className={`messages-container sm:h-${isExpanded ? 96 : 40} overflow-scroll mx-auto sm:w-[100%] w-full bg-[#FFFFFF] rounded-lg my-2`}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.isUser ? "user-message m-1 p-1" : "chatbot-message m-1 p-1"
              }
              style={{ justifyContent: "flex-start" }}
            >
              {msg.isUser ? (
                <div className="flex flex-col justify-start items-start ">
                  <div className="flex flex-row justify-start items-start ">
                    {" "}
                    <img src={Profile} className="mr-1 w-6" />{" "}
                    <p className="mb-2">
                      <b>You:</b>
                    </p>
                  </div>
                  <span className="flex flex-col justify-start items-start ">
                    <div className="w-full mb-2">{msg.text}</div>
                  </span>
                </div>
              ) : (
                <div className="flex flex-col justify-start items-start ">
                  <p>User: {showText} </p>
                  <div className="flex flex-row justify-start items-start ">
                    <img
                      src={Copilot}
                      alt=""
                      className=" mr-1 w-1/12"
                      style={{ alignSelf: "flex-start" }}
                    />{" "}
                    <p className="mb-2">
                      <b>PEx AI:</b>
                    </p>
                  </div>
                  <span className="flex flex-col justify-start items-start ">
                    <div className="w-full mb-2">{msg.text}</div>




                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="flex flex-row justify-center items-center text-lg my-2 mx-auto">
            <RiStarSLine className="mx-2 text-[#B175E7] text-xl" /> You could
            try
          </div>
          <div className="flex flex-row justify-around items-center my-4 mx-auto flex-wrap">
            <button
              className="text-[7px] bg-[#FFFFFF]  p-1 rounded-full m-1 w-1/4 shadow-lg border-1 border-grey-400 flex flex-row justify-center items-center"
              onClick={() => handleButtonClick("Noida vs Gurgaon")}
            >
              <img src={newindiagate} className="mr-2 w-1/5" alt="" />
              Noida vs Gurgaon
            </button>
            <button
              className="text-[7px] bg-[#FFFFFF]  p-1 rounded-full m-1 w-1/4 shadow-lg border-1 border-gray-400 flex flex-row justify-center items-center"
              onClick={() => handleButtonClick("Office Space in Noida")}
            >
              <img src={newbuilding} className="mr-2 w-1/5" alt="" />
              Office Space in Noida
            </button>
            <button
              className="text-[7px] bg-[#FFFFFF]  p-1 rounded-full m-1 w-1/4 shadow-lg border-1 border-gray-400 flex flex-row justify-center items-center"
              onClick={() => handleButtonClick("Top Projects in Delhi NCR")}
              disabled={isLoading}
            >
              <img src={newproject2} className="mr-2 w-1/5" alt="" />
              Top Projects in Delhi NCR
            </button>
          </div>
        </>
      )}

{dataShow && ( // Only show button when data is available
  <div className="flex justify-end items-center py-2 px-2">
    <button
      className={`text-gray-500 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
        isExpanded ? "" : ""
      }`}
      onClick={handleExpandClick}
    >
      {isExpanded ? "Collapse" : "Expand"}
    </button>
  </div>
)}

      <form
        onSubmit={handleSubmit}
        className="flex flex-row justify-between px-2 rounded-lg items-center bg-[#FFFFFF] py-2 sm:flex-nowrap flex-wrap"
      >
        <div className="flex flex-row justify-between items-center sm:w-full w-10/12 border-2 border-gray-300 sm:mx-1 rounded-full">
          <input
            type="text"
            value={inputText}
            className="sm:w-full w-3/4 px-1 text-md sm:my-1 my-0 min-h-[40px] resize-none bg-transparent focus:outline-none left-padding: 2px"
            onChange={handleInputChange}
            placeholder="Ask me anything..."
            required
          />


          <CiCamera className="text-2xl mx-1 text-gray-400" />
          <CiMicrophoneOn className="text-2xl mx-1 text-gray-400" />
        </div>

        <button
          type="submit"
          disabled={isLoading} // Disable button when loading
          className="flex sm:w-max w-fit flex-row justify-center items-center bg-[#8CAFFD] text-black text-md px-2 rounded-lg py-2 relative "
        >

        
        
          {isLoading && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
            </div>
          )}
          <>
            <FaArrowRight className="mx-2" />
          </>
        </button>
      </form>
    </div>
  );
}

export default Chatbot;