import styled from "styled-components";

const SquareSC = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  flex: 1 1 33%;
  background: ${props => (props.symbol === "X" ? "black" : "white")};
  color: ${props => (props.symbol === "X" ? "white" : "black")};
  font-size: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const Square = props => {
  return (
    <SquareSC symbol={props.symbol} onClick={props.onClickHandler}>
      {props.symbol}
    </SquareSC>
  );
};

export default Square;
