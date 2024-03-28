const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div className="chat-header text-gray-200">
            Anakin{" "}
            <time className="text-xs opacity-50 text-gray-200">12:46</time>
        </div>
        <div className={`chat-bubble bg-lime-400 text-black`}>Hi Whats upp!</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-200">
            Seen at 12:46
        </div>
    </div>
  )
}

export default Message