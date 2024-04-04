import React, { useState, useRef, useEffect } from "react";
import { extractDate } from "../../utils/extractTime";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const [loadingDelay, setLoadingDelay] = useState(true);
  const lastMessageRef = useRef();
  // useEffect(()=> {    
  //   setTimeout(() => {
  //    }, 100);
  // }, [])
  useEffect(() => {
    const delayTimer = setTimeout(() => { 
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });     
      setLoadingDelay(false);
    }, 1000); // Adjust the delay time as needed
    return () => clearTimeout(delayTimer);
  }, [messages]);

  // Group messages by date
  const groupedMessages = messages.reduce((acc, message) => {
    const date = extractDate(message.createdAt);
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(message);
    return acc;
  }, {});

  return (
    <div className="px-4 overflow-auto flex-1">
      {loadingDelay ? (
        // Display loading skeleton with delay
        <MessageSkeleton />
      ) : loading ? (
        // Display loading skeletons for all messages
        Object.keys(groupedMessages).map(date => (
          <React.Fragment key={date}>
            <p className="text-center text-gray-200">{date}</p>
            {[...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
          </React.Fragment>
        ))
      ) : Object.keys(groupedMessages).length === 0 ? (
        // Display message to start conversation if no messages
        <p className="text-center text-gray-200">Send a message to start the conversation</p>
      ) : (
        // Display grouped messages
        Object.entries(groupedMessages).map(([date, messages]) => (
          <React.Fragment key={date}>
            <p className="text-center text-gray-200">{date}</p>
            {messages.map((message, index) => (
              <div key={message._id}
                ref={lastMessageRef}
              >
                <Message message={message} isFirstMessage={index === 0} />
              </div>
            ))}
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default Messages;

// import React from "react";
// import { extractDate } from "../../utils/extractTime";
// import useGetMessages from "../../hooks/useGetMessages";
// import MessageSkeleton from "../skeletons/MessageSkeleton";
// import Message from "./Message";

// const Messages = () => {
//   const { messages, loading } = useGetMessages();

//   // Group messages by date
//   const groupedMessages = messages.reduce((acc, message) => {
//     const date = extractDate(message.createdAt);
//     if (!acc[date]) {
//       acc[date] = [];
//     }
//     acc[date].push(message);
//     return acc;
//   }, {});

//   return (
//     <div className="px-4 overflow-auto flex-1">
//       {
//         loading ? (
//           // Display loading skeleton
//           [...Array(3)].map((_,idx) => <MessageSkeleton key={idx} />)
//         ) : Object.keys(groupedMessages).length === 0 ? (
//           // Display message to start conversation if no messages
//           <p className="text-center text-gray-200">Send a message to start the conversation</p>
//         ) : (
//           // Display grouped messages
//           Object.entries(groupedMessages).map(([date, messages]) => (
//             <React.Fragment key={date}>
//               <p className="text-center text-gray-200">{date}</p>
//               {messages.map((message) => (
//                 <Message key={message._id} message={message} />
//               ))}
//             </React.Fragment>
//           ))
//         )
//       }
//     </div>
//   );
// };

// export default Messages;




/* mine */
// import useGetMessages from "../../hooks/useGetMessages";
// import MessageSkeleton from "../skeletons/MessageSkeleton";
// import Message from "./Message";

// const Messages = () => {
//   const {messages, loading} = useGetMessages();
//   console.log("Messages:", messages);
//   return (
//     <div className="px-4 overflow-auto flex-1">
//       {
//         !loading && messages.length > 0 && messages.map((message) => (
//           <Message key={message._id} message={message} />
//         ))
//       }
//       {
//         loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
//       }

//       {
//         !loading && messages.length === 0 && (
//           <p className="text-center text-gray-200">Send a message to start the conversations</p>
//         )
//       }
        
//     </div>
//   )
// }

// export default Messages