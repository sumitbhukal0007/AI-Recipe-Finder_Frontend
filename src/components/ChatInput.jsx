import { useState } from "react";
import axios from "axios";

const ChatInput = ({ onUpdate }) => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      onUpdate(input.trim())
      setInput("")
    }

    try {
      const res = await axios.post('http://localhost:5000/recipe', {
        userQuery: input.trim(),
      });

      console.log(res.data)

      if (onUpdate) {
        onUpdate(res.data.results);
      }

    } catch (err) {
      console.error('Recipe fetching Error', err)
    }

  };


  return (
    <form onSubmit={handleSubmit} className=" w-full bg-white  border-gray-300 py-4 px-2">
      <div className="max-w-2xl mx-auto flex items-center gap-3 ">

        <input
          type="text"
          className="flex-1 px-5 py-3 text-lg border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
          placeholder="Ask for a recipe..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium rounded-lg transition duration-200"
          
        >
          Generate
        </button>
      </div>

    </form>

  );
};

export default ChatInput;
