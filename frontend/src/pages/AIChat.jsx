import {useState} from "react";

function AIChat() {

    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("");

    const askQuestion = async () => {

        if (!question) return;

        const response = await fetch("http://127.0.0.1:8000/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                question
            })

        });

        const data = await response.json();

        setAnswer(data.answer);

    };


    
  return (
    <div className="dashboard">
        <h1> AI Chat</h1>
        <p> Ask about your uploaded documents.</p>
        <textarea 
        className="question-box" 
        placeholder="Ask anything... "
        value={question}
        onChange={(e)=> setQuestion(e.target.value)}
        />

        <button 
        className="ask-b"
        onClick={askQuestion}
        >
            Ask AI
        </button>

        {answer && (

                <div className="answer-box">

                    <h3>Answer</h3>

                    <p>{answer}</p>

                </div>

        )}

    </div>
  )
}

export default AIChat;