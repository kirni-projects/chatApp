import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  },[setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">    
       
        {!selectedConversation ? (
          <NoChatSelected /> 
          ) : (
            <>
              {/* Header */}
              <div className="bg-slate-400 px-4 py-2 mb-2">
              <span className="label-text text-gray-200 font-medium">To:</span>{" "}
              <span className="text-white font-bold">{selectedConversation.fullName}</span>
              </div>
              <Messages />
              <MessageInput />
            </>
          )
        }

    </div>
  );
};

export default MessageContainer;


const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  console.log(authUser);
  return(
    <div className="flex items-center text-center justify-center w-full h-full">
      <div className="px-4 ttext-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
      <img alt="Tailwind CSS chat bubble component"  className="w-20 h-20" src={authUser.profilePic} />
        <p>Welcome, 👋 Hi {authUser.username} ⚙️</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};