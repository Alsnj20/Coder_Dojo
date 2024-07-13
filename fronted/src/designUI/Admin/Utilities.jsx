import React from "react";

function Card({children}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div>
      {children}
      </div>
    </div>
  )
}

export default Card;

