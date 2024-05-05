import { toast } from "react-toastify";
import axios from "../../../api";
import React, { useState } from "react";
const initialState = {
  fname: "",
  lname: "",
  age: "",
};

const Create = () => {
  const [data, setData] = useState(initialState);
  const handleCreateUser = (e) => {
    e.preventDefault();
    axios
      .post("/users", data)
      .then(
        () => (
          toast.success("User muvaffaqiyatli qo'shildi"), setData(initialState)
        )
      )
      .catch((err) => console.log(err))
      .finally(() => {});
  };
  return (
    <div className="create">
      <form onSubmit={handleCreateUser}>
        <label htmlFor="fname">First Name*</label>
        <input
          value={data.fname}
          onChange={(e) => setData((p) => ({ ...p, fname: e.target.value }))}
          type="text"
          placeholder="First Name"
          required
          id="fname"
        />
        <label htmlFor="lname">Last Name*</label>
        <input
          value={data.lname}
          onChange={(e) => setData((p) => ({ ...p, lname: e.target.value }))}
          type="text"
          placeholder="Last Name"
          required
          id="lname"
        />
        <label htmlFor="age">Age*</label>
        <input
          value={data.age}
          onChange={(e) => setData((p) => ({ ...p, age: e.target.value }))}
          type="number"
          placeholder="Last Name"
          required
          id="age"
        />
        <button className="form__btn">Add</button>
      </form>
    </div>
  );
};

export default Create;
