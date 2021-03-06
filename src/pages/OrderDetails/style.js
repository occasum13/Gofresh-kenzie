import styled from "styled-components";

export const PrincipalContainer = styled.div``;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 85px;
  background-color: var(--white-gray);
  border-radius: 0 0 30px 30px;

  button {
    margin: 9px;
    width: 64px;
    height: 21px;
    background-color: var(--lima);
    color: var(--white);
    border-radius: 5px 5px 5px 5px;
    font-size: 7px;
    border: none;
  }
`;
export const Main = styled.div``;
export const Section1 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0;

  h1 {
    text-align: center;
    width: 220px;
    height: 78px;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.5);
  }
`;
export const Section2 = styled.section`
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
  display: flex;
  font-size: 7px;
  justify-content: space-evenly;
  p {
    color: var(--green);
    span {
      font-size: 10px;
      color: #111111;
      @media screen and (min-width: 768px) {
        font-size: 15px;
      }
    }
  }
`;
export const Section3 = styled.section`
  display: flex;
  justify-content: space-around;
  border-top: solid 1px var(--white-gray);
  border-bottom: solid 1px var(--white-gray);
  width: 100%;

  button {
    font-size: 15px;
    margin: 5px 0;
    background-color: var(--white);
    border: none;
    color: rgba(31, 48, 0, 0.5);
  }
`;

export const Section4 = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: rgba(31, 48, 0, 0.8);

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 50px;
  }
`;
export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  button {
  }
  span {
    margin: 1px;
    color: rgba(31, 48, 0, 0.5);
  }
`;
export const Div2 = styled.div`
  p {
    margin: 50px;
  }
`;
export const ButtonRed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: var(--red);
  padding-top: 5px;
`;
export const ButtonGray = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #c4c4c4;
`;

export const Section5 = styled.section`
  display: flex;
  justify-content: center;
  button {
    background-color: var(--red);
    color: var(--white);
    width: 279px;
    height: 38px;
    border-radius: 5px;
    border: none;
    margin-top: 70px;
  }
`;

export const Section6 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 290px;
    height: 180px;
    background-color: rgba(241, 241, 241, 1);
    border-radius: 5px;
    margin: 70px 0;
    overflow: auto;

    @media screen and (min-width: 768px) {
      width: 390px;
      height: 180px;
    }
    p {
      width: 100%;
      text-align: center;
      color: var(--red);
      font-size: 13px;
      margin: 12px 0;
    }
    li {
      color: var(--gray);
      font-size: 12px;
      font-style: italic;
      margin-left: 10px;
    }
  }
`;
