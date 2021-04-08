import React, { useState } from "react";

export const ChildContext = React.createContext();

function Child(props) {
  const [childId] = useState(29);
  return (
    <>
      <button onClick={() => props.sendID(childId)}>Get Child ID</button>
    </>
  );
}

export default Child;
