import React from "react";
import Users from "../../components/users/Users";

const Home = () => {
  return (
    <>
      <Users buy={true} edit={false} del={false} />
    </>
  );
};

export default Home;
