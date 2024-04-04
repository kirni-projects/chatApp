import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
    const bubbleBgColor = fromMe ? 'bg-lime-400' : 'bg-lime-100';
    const shakeClass = message.shouldShake ? 'shake' : '';
    return (
      <>
      <div className={`chat ${chatClassName}`}>
          <div className="chat-image avatar">
              <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" 
              src={profilePic} />
              </div>
          </div>
          <div className={`chat-bubble text-black ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
          <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-200">
              {formattedTime}
          </div>
      </div>
      </>
    )
  }

export default Message;





/* mine */
// import { useAuthContext } from "../../context/AuthContext";
// import { extractTime, extractDate } from "../../utils/extractTime";
// import useConversation from "../../zustand/useConversation";

// const Message = ({message}) => {
//   const {authUser} = useAuthContext();
//   const {selectedConversation} = useConversation();
//   const fromMe = message.senderId === authUser._id;
//   const formattedTime = extractTime(message.createdAt);
//   const formattedDate = extractDate(message.createdAt);
//   const chatClassName = fromMe ? 'chat-end' : 'chat-start';
//   const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
//   const bubbleBgColor = fromMe ? 'bg-lime-400' : 'bg-lime-100';
//   return (
//     <>
//     <p>{formattedDate}</p>
//     <div className={`chat ${chatClassName}`}>
//         <div className="chat-image avatar">
//             <div className="w-10 rounded-full">
//             <img alt="Tailwind CSS chat bubble component" 
//             src={profilePic} />
//             </div>
//         </div>
//         <div className={`chat-bubble text-black ${bubbleBgColor}`}>{message.message}</div>
//         <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-200">
//             {formattedTime}
//         </div>
//     </div>
//     </>
//   )
// }

// export default Message