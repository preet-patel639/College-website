

// const Chatbot = () => {
//   return (
//     <div style={{
//       position: "fixed",
//       bottom: "20px",
//       right: "20px",
//       background: "red",
//       padding: "20px",
//       color: "white",
//       zIndex: 9999
//     }}>
//       CHATBOT IS HERE
//     </div>
//   );
// };

// export default Chatbot;




// const Chatbot = () => {
//   return null;
// };

// export default Chatbot;


// import { useState } from "react";
// import useChatbot from "../hooks/useChatbot";

// const Chatbot = () => {
//   const {
//     messages,
//     input,
//     setInput,
//     sendMessage,
//   } = useChatbot();

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Floating Button */}
//       <div className="fixed bottom-6 right-6 z-9999">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="bg-blue-600 text-white p-4 rounded-full shadow-lg"
//         >
//           🎓
//         </button>
//       </div>

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-20 right-6 w-80 h-96 bg-white shadow-2xl rounded-lg flex flex-col z-9999">
          
//           {/* Header */}
//           <div className="bg-blue-600 text-white p-3 rounded-t-lg">
//             Ganesh University AI Assistant
//           </div>

//           {/* Messages */}
//           <div className="flex-1 p-3 overflow-y-auto">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`mb-2 text-sm ${
//                   msg.role === "user"
//                     ? "text-right"
//                     : "text-left"
//                 }`}
//               >
//                 {msg.content}
//               </div>
//             ))}
//           </div>

//           {/* Input */}
//           <div className="p-3 border-t flex">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Ask about admission..."
//               className="flex-1 border p-2 rounded text-sm"
//             />
//             <button
//               onClick={sendMessage}
//               className="ml-2 bg-blue-600 text-white px-3 rounded"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Chatbot;




import { useState, useEffect, useRef } from "react";
import useChatbot from "../hooks/useChatbot";

const Chatbot = () => {
  const {
    messages,
    input,
    setInput,
    sendMessage,
    isLoading,
  } = useChatbot();

  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          🎓
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white shadow-2xl rounded-lg flex flex-col z-[9999]">
          
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 rounded-t-lg font-semibold">
            Ganesh University AI Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 text-sm ${
                  msg.role === "user"
                    ? "text-right"
                    : "text-left"
                }`}
              >
                <span className={`inline-block p-2 rounded ${
                  msg.role === "user" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-200 text-gray-800"
                }`}>
                  {msg.content}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="text-left mb-2">
                <span className="inline-block p-2 rounded bg-gray-200 text-gray-800">
                  <span className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                  </span>
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask about admission..."
              className="flex-1 border p-2 rounded text-sm"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-600 text-white px-3 rounded hover:bg-blue-700 disabled:opacity-50"
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;



