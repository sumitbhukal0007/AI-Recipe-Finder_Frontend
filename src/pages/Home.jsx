import { useState } from "react"
import Topbar from "../components/Topbar"
import ChatInput from "../components/ChatInput"
import ChatResult from "../components/ChatResult"

function Chat() {

  const [result, setResult] = useState('');


  return (
    <div className="h-screen flex flex-col">
      <Topbar />
      <div className=" flex flex-1">
        <div className="flex flex-col flex-1">
          <div className="input-menu flex justify-center w-full p-4 my-4 space-y-3 text-3xl rounded-2xl">
            <ChatInput onUpdate={setResult} />
          </div>
          <div className="result-section flex flex-row justify-center">
            <ChatResult result={result} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
