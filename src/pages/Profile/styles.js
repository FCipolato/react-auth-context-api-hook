import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  h1 {
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
  }

  button {
    width: 118px;
    height: 40px;
    border-radius: 5px;
    border: 0;
    font-size: 1.6rem;
    background-color: #0957c3;
    color: #fff;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export default StyledDiv;
