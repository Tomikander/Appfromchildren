import React from "react";

export default function RandomImages({ src }) {
    return (
			<div className="mt-4 d-flex justify-content-center">
      <img
        src={src}
        alt="Случайная"
        style={{
          maxWidth: "320px",
          width: "100%",
          height: "auto",
          borderRadius: "9px",
          marginTop: "32px"
        }}
      />
    </div>
  );
}