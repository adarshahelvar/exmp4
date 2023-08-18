import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      // .post("http://localhost:3001/createUser", {name, email, age})
      .post(
        "https://crudcrud.com/api/4da140e958804923868d9b97cbc5982d/createUser",
        { name, email, age }
      )
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-info justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Add User</h2>
        <form onSubmit={Submit}>
          <div className="mb-2">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              placeholder="Enter Name"
              required
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              placeholder="Enter Email"
              required
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age:</label>
            <input
              type="number"
              required
              placeholder="Enter Age"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default CreateUser;
