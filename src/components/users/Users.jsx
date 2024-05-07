import React, { useEffect, useState } from "react";
import axios from "../../api";
import Skeleton from "../skeleton/Skeleton";
import { toast } from "react-toastify";
const initialState = {
  fname: "",
  lname: "",
  age: "",
};

const Users = ({ del, buy, edit }) => {
  let [data, setData] = useState(null);
  let [edite, setEdite] = useState(false);
  let [loading, setLoading] = useState(false);
  let [reload, setReload] = useState(true);
  let [btn, setBtn] = useState(false);
  let [user, setUser] = useState(initialState);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [reload]);
  const handleDeletUser = (id) => {
    axios
      .delete(`/users/${id}`)
      .then(
        (res) => (
          toast.info(`${id}-id dagi User o'chirildi`), setReload((p) => !p)
        )
      )
      .catch((err) => console.log(err))
      .finally(() => {});
  };
  const handleUserEdit = (id) => {
    // data?.forEach((el) => (el.id == id ? setUser(res.data) : el));
    axios
      .get(`/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };

  let card = data?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.url} alt="" />
      <h3>
        {el.fname} {el.lname}
      </h3>
      <p>Age: {el.age}</p>
      {del ? (
        <button
          onClick={() => handleDeletUser(el.id)}
          style={{ background: "red" }}
        >
          Delete
        </button>
      ) : (
        <></>
      )}
      {edit ? (
        <button
          onClick={() => (setEdite((p) => true), handleUserEdit(el.id))}
          style={{ marginLeft: "10px" }}
        >
          Edit
        </button>
      ) : (
        <></>
      )}
      {buy ? <button>About the user</button> : <></>}
    </div>
  ));
  const handleEdit = (e) => {
    setBtn(true);
    e.preventDefault();
    axios
      .put(`/users/${user.id}`, user)
      .then(
        (res) => (
          setReload((p) => !p),
          toast.success("User muvaffaqiyatli o'zgartirildi")
        )
      )
      .catch((err) => console.log(err))
      .finally(() => (setBtn(false), setEdite(false)));
  };
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <section className="users">
          <div className="container">
            <div className="wrapper">{card}</div>
          </div>
        </section>
      )}
      {edite ? (
        <form onSubmit={handleEdit} className="edit__form">
          <label htmlFor="fname">First Name*</label>
          <input
            value={user.fname}
            onChange={(e) => setUser((p) => ({ ...p, fname: e.target.value }))}
            type="text"
            placeholder="First Name"
            required
            id="fname"
          />
          <label htmlFor="lname">Last Name*</label>
          <input
            value={user.lname}
            onChange={(e) => setUser((p) => ({ ...p, lname: e.target.value }))}
            type="text"
            placeholder="Last Name"
            required
            id="lname"
          />
          <label htmlFor="age">Age*</label>
          <input
            value={user.age}
            onChange={(e) => setUser((p) => ({ ...p, age: e.target.value }))}
            type="number"
            placeholder="Last Name"
            required
            id="age"
          />
          <div className="btns">
            <button
              onClick={() => setEdite((p) => false)}
              className="edit__btn form__btn"
              type="button"
            >
              Cancel
            </button>
            <button disabled={btn} className="form__btn">
              {btn ? "Loading..." : "Edit"}
            </button>
          </div>
        </form>
      ) : (
        <></>
      )}
    </>
  );
};

export default Users;
