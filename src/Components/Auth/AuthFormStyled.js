import styled from "styled-components";

export const AuthFormStyled = styled.div`
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;

  /* .AuthFormContainer {
  
  } */

  .navContainer {
    padding-top: 40px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .authTitle {
    font-family: inherit;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;
    margin-bottom: 70px;
    color: #dfe8ff;
  }

  .form {
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input {
    border: 2px solid#dfe8ff;
    border-radius: 30px;
    padding: 15px 15px 15px 0px;
    width: 289px;
    font-family: inherit;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
    color: #dfe8ff;
    outline: none;
    text-align: center;
    background-color: rgba(137, 150, 184, 0.6);
    margin-bottom: 10px;
  }

  .buttons {
    width: 176px;
    height: 44px;
    background: rgba(137, 150, 184, 0.6);
    border: 2px solid#dfe8ff;
    box-sizing: border-box;
    border-radius: 30px;
    font-family: inherit;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
    align-items: center;
    text-align: center;
    color: #dfe8ff;
    outline: none;
    margin-top: 60px;
  }
  .buttons:hover {
    background: #3f1583;
    color: white;
    box-shadow: rgb(252 132 45 / 50%) 0px 4px 10px;
  }
`;
