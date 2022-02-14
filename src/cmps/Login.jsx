import React, { useRef } from "react";
import { v4 as uuidV4 } from "uuid";

export const Login = ({ onIdSubmit }) => {
  const idRef = useRef();
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };

  const createNewId = () => {
    onIdSubmit(uuidV4);
  };
  return (
    <div className="login container">
      <form className="form-modal" onSubmit={handleSubmit}>
        <label htmlFor="id">Enter Your Id:</label>
        <input type="text" id="id" ref={idRef} required></input>
        <label htmlFor="name">Enter Your Name:</label>
        <input type="text" id="name" ref={nameRef} required></input>
        <div className="actions">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button className="btn btn-secondary" onClick={() => createNewId()}>
            Create A New Id
          </button>
        </div>
      </form>
    </div>
  );
};
