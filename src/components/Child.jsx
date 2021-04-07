import React, { useState } from "react";

export const ChildContext = React.createContext();

function Child(props) {
  //   const [childId, setChildId] = useState(29);

  return (
    <>
      <button onClick={() => props.sendID(29)}>Send Child ID</button>
    </>
  );
}

export default Child;
