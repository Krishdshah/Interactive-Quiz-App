import React, { useState } from "react";
import "./App.css";

const quizData = [
    {
      "question": "What is the name of Google's web browser?",
      "options": ["Firefox", "Safari", "Edge", "Chrome"],
      "answer": "Chrome"
    },
    {
      "question": "Which programming language was created by Google?",
      "options": ["Rust", "Go", "Python", "Swift"],
      "answer": "Go"
    },
    {
      "question": "What does Google use to rank websites in search results?",
      "options": ["PageRank Algorithm", "Alexa Rank", "SiteMap Indexing", "URL Sorting"],
      "answer": "PageRank Algorithm"
    },
    {
      "question": "What is the name of Google's mobile operating system?",
      "options": ["iOS", "HarmonyOS", "Android", "Windows Mobile"],
      "answer": "Android"
    },
    {
      "question": "What year was Google founded?",
      "options": ["1996", "1998", "2000", "2002"],
      "answer": "1998"
    },
    {
      "question": "Who are the founders of Google?",
      "options": ["Elon Musk and Jeff Bezos", "Bill Gates and Steve Ballmer", "Larry Page and Sergey Brin", "Steve Jobs and Steve Wozniak"],
      "answer": "Larry Page and Sergey Brin"
    },
    {
      "question": "What is the name of Google's parent company?",
      "options": ["Meta", "Alphabet", "Amazon", "IBM"],
      "answer": "Alphabet"
    },
    {
      "question": "What cloud computing platform is provided by Google?",
      "options": ["AWS", "Azure", "GCP", "Oracle Cloud"],
      "answer": "GCP"
    },
    {
      "question": "Which of these is a Google-developed AI chatbot?",
      "options": ["Siri", "Alexa", "Bard", "Cortana"],
      "answer": "Bard"
    },
    {
      "question": "What is Google's main source of revenue?",
      "options": ["Hardware Sales", "Cloud Services", "Advertising", "App Sales"],
      "answer": "Advertising"
    }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const isCorrect = selectedOption === quizData[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Wrong! Correct: ${quizData[currentQuestion].answer}`);
    }

    setTimeout(() => {
      setFeedback("");
      setSelectedOption("");
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption("");
    setFeedback("");
    setShowScore(false);
  };

  if (showScore) {
    return (
      <div className="quiz-container">
        <h2>Quiz Completed</h2>
        <p>Your Score: {score} / {quizData.length}</p>
        <button onClick={handleRestart}>Restart Quiz</button>
      </div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="progress">
        Question {currentQuestion + 1} of {quizData.length}
      </div>
      <div className="question">{question.question}</div>
      <div className="options">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            style={{
              backgroundColor: selectedOption === option ? "#d3d3d3" : "white"
            }}
          >
            {option}
          </button>
        ))}
      </div>
      {selectedOption && (
        <button onClick={handleNextQuestion}>Next</button>
      )}
      {feedback && <div className="feedback">{feedback}</div>}
    </div>
  );
}

export default App;
