import React from "react";

export default function AnswerButton({ answer, selectedAnswer, isCorrect, onSelect }) {
  const bgColor = 
    selectedAnswer === answer
      ? isCorrect === true
        ? "#28a745" 
        : isCorrect === false
          ? "#dc3545" 
          : "#007bff" 
      : "#e9ecef"; 

  return (
    <button
      onClick={() => onSelect(answer)}
      disabled={isCorrect !== null}
      style={{
        padding: '10px 20px',
        fontSize: '1rem',
        fontWeight: 'bold',
        borderRadius: '8px',
        backgroundColor: bgColor,
        color: selectedAnswer === answer ? 'white' : 'black',
        border: 'none',
        cursor: 'pointer',
        minWidth: '100px',
        transition: 'background-color 0.3s ease'
      }}
    >
      {answer}
    </button>
  );
}