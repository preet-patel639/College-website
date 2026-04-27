// // // hooks/useChatbot.js
// // // Custom hook managing AI chatbot state and API communication

// // import { useState, useRef } from "react";


// import { useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import coursesData from "../data/courses.json";

// // import coursesData from "../data/courses.json";

// // // Build the system prompt with full course knowledge base


// const buildSystemPrompt = () => {
//   const courseDetails = coursesData
//     .map((course) => {
//       const semesterInfo = course.semesters
//         .map(
//           (s) =>
//             `Semester ${s.semester}: ${s.subjects.join(", ")}`
//         )
//         .join("\n      ");
//       return `


//   Course: ${course.course_name} (${course.short_name})
//   Duration: ${course.duration} | Semesters: ${course.total_semesters} | Fees: ${course.fees}
//   Eligibility: ${course.eligibility}
//   Career Opportunities: ${course.career_opportunities.join(", ")}
//   Semester-wise Subjects:
//       ${semesterInfo}`;
//     })
//     .join("\n---");

//   return `You are a professional College Admission & Student Support AI Assistant for Ganesh University.

// YOUR ROLE:
// - Answer ONLY college, admission, and course-related questions about Ganesh University.
// - Provide accurate information about courses, semesters, and subjects from the knowledge base below.
// - Explain details clearly in simple, friendly language.
// - Be polite, professional, and student-focused.

// COURSE KNOWLEDGE BASE:
// ${courseDetails}

// GENERAL UNIVERSITY INFO:
// - University Name: Ganesh University
// - Location: Ahmedabad, Gujarat, India
// - Established: 1998
// - Affiliation: UGC Approved, NAAC A+ Accredited
// - Contact: +91-79-2630-4400 | admissions@ganeshuniversity.edu.in
// - Admission Season: June - August every year
// - Application: Apply online at ganeshuniversity.edu.in

// COURSE HANDLING RULES:
// - If user asks about a specific course, provide: duration, semesters, semester-wise subjects, eligibility, fees, career opportunities.
// - If user asks about a specific semester of a course, provide only that semester's subjects.
// - If a user asks which course is best for them, ask about their interests and guide them accordingly.

// LEAD COLLECTION (Admission Inquiry):
// - When a user shows interest in admission or applying, politely collect:
//   1. Full Name
//   2. Mobile Number
//   3. Email Address
//   4. Interested Course
// - Collect one detail at a time naturally in conversation.
// - Never force or pressure users to share details.
// - After collecting all details, confirm and say the admissions team will contact them within 24 hours.

// RESTRICTIONS:
// - Do NOT answer questions unrelated to Ganesh University, education, or courses.
// - If asked something outside scope (politics, entertainment, personal advice, etc.), politely say: "I'm here to help with Ganesh University admissions and courses. Could I assist you with course details or admission queries?"

// TONE: Helpful, warm, professional, student-friendly. Use simple language. Keep responses concise but complete.`;
// };


// const SYSTEM_PROMPT = buildSystemPrompt();

// // Initialize Gemini
// const genAI = new GoogleGenerativeAI(
//   import.meta.env.VITE_GEMINI_API_KEY
// );

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });




// const useChatbot = () => {
//   const [messages, setMessages] = useState([
//     {
//       role: "assistant",
//       content:
//         "👋 Hello! Welcome to **Ganesh University** Admission Assistant!\n\nI'm here to help you with:\n- 📚 Course details & subjects\n- 🎓 Admission queries\n- 📋 Eligibility & fees\n- 💼 Career opportunities\n\nHow can I assist you today?",
//     },
//   ]);


// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const sendMessage = async (userText) => {
// //     if (!userText.trim() || isLoading) return;

// //     // Add user message
// //     const updatedMessages = [
// //       ...messages,
// //       { role: "user", content: userText },
// //     ];
// //     setMessages(updatedMessages);
// //     setIsLoading(true);
// //     setError(null);

// //     try {
// //       // Build API messages (exclude welcome message from history sent to API)
// //       const apiMessages = updatedMessages
// //         .filter((m) => !(m.role === "assistant" && m === messages[0]))
// //         .map((m) => ({ role: m.role, content: m.content }));

// //       const response = await fetch("https://api.anthropic.com/v1/messages", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           model: "claude-sonnet-4-20250514",
// //           max_tokens: 1000,
// //           system: SYSTEM_PROMPT,
// //           messages: apiMessages,
// //         }),
// //       });

// //       if (!response.ok) {
// //         throw new Error(`API error: ${response.status}`);
// //       }

// //       const data = await response.json();
// //       const assistantReply =
// //         data.content?.[0]?.text || "I'm sorry, I couldn't process that. Please try again.";

// //       setMessages((prev) => [
// //         ...prev,
// //         { role: "assistant", content: assistantReply },
// //       ]);
// //     } catch (err) {
// //       console.error("Chatbot error:", err);
// //       setError("Connection error. Please try again.");
// //       setMessages((prev) => [
// //         ...prev,
// //         {
// //           role: "assistant",
// //           content:
// //             "Sorry, I'm having trouble connecting right now. Please try again or contact us at admissions@ganeshuniversity.edu.in",
// //         },
// //       ]);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const clearChat = () => {
// //     setMessages([
// //       {
// //         role: "assistant",
// //         content:
// //           "👋 Hello! Welcome to **Ganesh University** Admission Assistant!\n\nI'm here to help you with:\n- 📚 Course details & subjects\n- 🎓 Admission queries\n- 📋 Eligibility & fees\n- 💼 Career opportunities\n\nHow can I assist you today?",
// //       },
// //     ]);
// //     setError(null);
// //   };

// //   return { messages, isLoading, error, sendMessage, clearChat };
// // };

// // export default useChatbot;




// // // return (
// // //   <div style={{
// // //     position: "fixed",
// // //     bottom: "20px",
// // //     right: "20px",
// // //     background: "red",
// // //     padding: "20px",
// // //     color: "white",
// // //     zIndex: 9999
// // //   }}>
// // //     CHATBOT IS HERE
// // //   </div>
// // // );




// // import { useState } from "react";
// // import { GoogleGenerativeAI } from "@google/generative-ai";
// // import coursesData from "../data/courses.json";



// // const useChatbot = () => {
// //   const [messages, setMessages] = useState([
// //     {
// //       role: "assistant",
// //       content:
// //         "👋 Hello! Welcome to Ganesh University Admission Assistant. How can I help you today?",
// //     },
// //   ]);



//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);


//   const sendMessage = () => {
//     if (!input.trim() || isLoading) return;

//     // Add user message
//     const userMessage = { role: "user", content: input };

//     const userText = input;
//     setInput("");

//     setMessages((prev) => [
//       ...prev,
//       { role: "user", content: userText },
//     ]);

//     setIsLoading(true);

//     try {
//       const fullPrompt = `${SYSTEM_PROMPT}

// User Question: ${userText}`;

//       const result = await model.generateContent(fullPrompt);
//       const response = await result.response;
//       const text = response.text();

//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: text },
//       ]);
//     } catch (error) {
//       console.error(error);
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           content: "⚠ AI error. Please try again.",
//         },
//       ]);
//     }

//     setIsLoading(false);
//   };

//   return { messages, input, setInput, sendMessage };
// };

// export default useChatbot;




//     // setMessages((prev) => [...prev, userMessage]);

//     // Fake AI response (temporary demo logic)
//     // setTimeout(() => {
//     //   const botReply = {
//     //     role: "assistant",
//     //     content:
//     //       "Thank you for your query. Our admission team will assist you. Please visit the Admissions page for more details.",
//     //   };

//     //   setMessages((prev) => [...prev, botReply]);
//     // }, 500);

//     // setInput("");
//   // };

// //   return {
// //     messages,
// //     input,
// //     setInput,
// //     sendMessage,
// //   };
// // };

// // export default useChatbot;






import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import coursesData from "../data/courses.json";

const MODELS = ["gemini-2.5-flash", "gemini-3-flash", "gemini-2.5-flash-lite", "gemini-2-flash"];

const buildSystemPrompt = () => {
  const courseDetails = coursesData
    .map((course) => {
      const semesterInfo = course.semesters
        .map((s) => `Semester ${s.semester}: ${s.subjects.join(", ")}`)
        .join("\n");

      return `Course: ${course.course_name} (${course.short_name})
Duration: ${course.duration}
Fees: ${course.fees}
Eligibility: ${course.eligibility}
Career: ${course.career_opportunities.join(", ")}
${semesterInfo}`;
    })
    .join("\n---\n");

  return `You are an AI Admission Counselor of Ganesh University. Only answer university-related questions.

YOUR ROLE:
- Answer ONLY college, admission, and course-related questions about Ganesh University.
- Provide accurate information about courses, semesters, and subjects.
- Explain details clearly in simple, friendly language.
- Be polite, professional, and student-focused.

COURSE KNOWLEDGE BASE:
${courseDetails}

GENERAL UNIVERSITY INFO:
- University Name: Ganesh University
- Location: Ahmedabad, Gujarat, India
- Established: 1998
- Affiliation: UGC Approved, NAAC A+ Accredited
- Contact: +91-79-2630-4400 | admissions@ganeshuniversity.edu.in
- Admission Season: June - August every year
- Application: Apply online at ganeshuniversity.edu.in

COURSE HANDLING RULES:
- If user asks about a specific course, provide: duration, semesters, semester-wise subjects, eligibility, fees, career opportunities.
- If user asks about a specific semester of a course, provide only that semester's subjects.
- If a user asks which course is best for them, ask about their interests and guide them accordingly.

LEAD COLLECTION (Admission Inquiry):
- When a user shows interest in admission or applying, politely collect: Full Name, Mobile Number, Email Address, Interested Course
- Collect one detail at a time naturally in conversation.
- After collecting all details, confirm and say the admissions team will contact them within 24 hours.

RESTRICTIONS:
- Do NOT answer questions unrelated to Ganesh University, education, or courses.
- If asked something outside scope, politely say: "I'm here to help with Ganesh University admissions and courses. Could I assist you with course details or admission queries?"

TONE: Helpful, warm, professional, student-friendly. Use simple language. Keep responses concise but complete.`;
};

const useChatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Hello! Welcome to Ganesh University Admission Assistant!",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput("");

    setMessages((prev) => [...prev, { role: "user", content: userText }]);
    setIsLoading(true);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey || apiKey.trim() === "") {
      setMessages((prev) => [...prev, { role: "assistant", content: "⚠ API key not configured." }]);
      setIsLoading(false);
      return;
    }

    const genAI = new GoogleGenerativeAI(apiKey.trim());
    const systemPrompt = buildSystemPrompt();
    const fullPrompt = `${systemPrompt}\n\nUser Question: ${userText}`;

    for (const modelName of MODELS) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(fullPrompt);
        const text = result.response.text();
        setMessages((prev) => [...prev, { role: "assistant", content: text }]);
        setIsLoading(false);
        return;
      } catch (error) {
        console.error(`Model ${modelName} failed:`, error.message);
        continue;
      }
    }

    setMessages((prev) => [...prev, { role: "assistant", content: "⚠ AI error. Please try again." }]);
    setIsLoading(false);
  };

  return { messages, input, setInput, sendMessage, isLoading };
};

export default useChatbot;