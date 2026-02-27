import { useState } from "react";
import { askAI } from "../services/api";

export default function AIChat() {
  const [question,setQuestion] = useState("");
  const [chatHistory,setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await askAI({question});
    setChatHistory([...chatHistory,{role:"user",content:question},{role:"ai",content:res.data.response}]);
    setQuestion("");
  }

  return (
    <div>
      <div style={{maxHeight:"400px",overflowY:"scroll"}}>
        {chatHistory.map((msg,i)=>(
          <div key={i} style={{margin:"5px",textAlign: msg.role==="user"?"right":"left"}}>
            <b>{msg.role}:</b> {msg.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={question}
          onChange={e=>setQuestion(e.target.value)}
          placeholder="Ask your question..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}