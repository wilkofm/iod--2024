import React from "react";

export default function Greeting({ name = "World", children }) {
  return (
    <div className="Greeting">
      {/* if the 'name' prop exists, render it on the screen */}
      <h3>Hello {name}</h3>
      {/* if this component has children, render them here */}
      {children}
    </div>
  );
}
