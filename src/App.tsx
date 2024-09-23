import { WhenGuard } from "guard";
import { useState } from "react";
import "./App.css";

function App() {
  const [count] = useState(0);

  return (
    <div>
      <h1>Hello World</h1>
      <WhenGuard when={count % 2 === 0}>
        <p>I am 2</p>
      </WhenGuard>
    </div>
  );
}

export default App;
