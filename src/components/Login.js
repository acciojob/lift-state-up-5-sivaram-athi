import React from "react";
import { useState } from "react";

const Login = ({SetVerify}) => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  
  const NameChange = (e) => {
    setName(e.target.value);
  };
  const PasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const submit = () => {
    if (Name === "" || Password === "") {
      alert("Please fill all the fields");
      return;
    }
    if (Password.length < 8) {
      alert("Password should be atleast 8 characters long");
      return;
    }
    SetVerify(1);
  };
  return (
    <>
      <div>
        <label htmlFor="Name">UserName : </label>
        <input
          type="text"
          id="Name"
          name="Name"
          onChange={NameChange}
          value={Name}
          required
        />
      </div>
      <br />
      <div>
        <label htmlFor="Password">Password : </label>
        <input
          type="password"
          id="Password"
          name="Password"
          onChange={PasswordChange}
          value={Password}
          required
        />
      </div>
      <br />
      <button type="submit" onClick={submit}>
        Submit
      </button>
    </>
  );
};

export default Login;
