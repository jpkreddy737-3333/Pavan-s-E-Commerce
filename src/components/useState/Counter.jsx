import { useState } from "react";

function Counter() {
  const [state, setState] = useState(0);

  return (
    <div>
      <h1>UseState Component: {state}</h1>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <button onClick={() => setState(state - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;