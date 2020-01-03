import React from "react";
import Inputs from "./inputs";
function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.userIsRegistered && <Inputs />}
      {props.userIsRegistered ? (
        <button type="submit">register</button>
      ) : (
        <button type="submit">login</button>
      )}
    </form>
  );
}

export default Form;
