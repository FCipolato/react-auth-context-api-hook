import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../contexts/auth";

import StyledDiv from "./styles";

const Profile = () => {
  const { user, signIn, signOut } = useContext(AuthContext);

  useEffect(() => {
    user || signIn();
  }, [user, signIn]);

  const handleSignout = async () => {
    signOut();
  };

  return (
    <StyledDiv>
      <h1>Dashboard</h1>
      {user ? (
        <>
          <p>Hello {user.name}!</p>
          <p>Your email is {user.email}!</p>
        </>
      ) : (
        <p>loading</p>
      )}
      <button onClick={() => handleSignout()}>Sign out</button>
      <Link to="/dashboard">dashboard</Link>
    </StyledDiv>
  );
};
export default Profile;
