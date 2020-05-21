import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../contexts/auth";

import StyledDiv from "./styles";

const Dashboard = () => {
  const { user, signIn, signOut } = useContext(AuthContext);

  useEffect(() => {
    user || signIn();
  }, [signIn, user]);

  const handleSignout = async () => {
    signOut();
  };

  return (
    <StyledDiv>
      <h1>Dashboard</h1>
      {user ? (
        <>
          <p>Hello {user.name}!</p>
        </>
      ) : (
        <p>loading</p>
      )}
      <button onClick={() => handleSignout()}>Sign out</button>
      <Link to="/profile">profile</Link>
    </StyledDiv>
  );
};
export default Dashboard;
