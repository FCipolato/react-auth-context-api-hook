import React, { useContext } from "react";

import AuthContext from "../../contexts/auth";

import StyledDiv from "./styles";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);

  const handleSignIn = () => signIn();

  return (
    <StyledDiv>
      <button onClick={() => handleSignIn()}>Sign in</button>
    </StyledDiv>
  );
};

export default SignIn;
