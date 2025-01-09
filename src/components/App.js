
import React from "react";
import './../styles/App.css';
import Login from "./Login";
import { useState } from "react";

const App = () => {
  const [verify, SetVerify] = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>parent Component</h1>
        {verify === 0 && <Login SetVerify={SetVerify} /> }
        {verify === 1 && <p>Login Successful!</p>}
    </div>
  )
}

export default App
