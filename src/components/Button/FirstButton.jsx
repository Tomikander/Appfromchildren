import React from "react";
import Button from "react-bootstrap/esm/Button";

export default function FirstButton({ isLoading, handleClick, text, loadingText }) {
  return (
    <div>
      <Button
        variant="warning"
        disabled={isLoading}
        onClick={handleClick}
        style={{
          fontWeight: 'bold'
        }}
      >
        {isLoading ? loadingText : text || "нажми сюда"}
      </Button>
    </div>
  );
}