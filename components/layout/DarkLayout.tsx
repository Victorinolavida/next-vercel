import React, { FC } from "react";

export const DarkLayout: FC = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <h3>dark layout</h3>
      <div>{children}</div>
    </div>
  );
};