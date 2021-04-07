import React, { useState, useContext } from "react";
import Child from "./Child";
import ChildContext from "./Child";

function Parent() {
  const [childsId, setChildsId] = useState(0);

  return (
    <>
      <div>
        <h1>My Child's ID is {childsId}</h1>
        <Child sendID={(childsId) => setChildsId(childsId)}></Child>
      </div>
    </>
  );
}

export default Parent;
