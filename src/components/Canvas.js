import { useState } from "react";
import styled from "styled-components";
import Square from "./Square";
import Modal from "./UI/Modal";

const CanvasSC = styled.div`
  width: 900px;
  height: 900px;
  border: 1px solid black;
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  position: relative;
`;

const Canvas = () => {
  const [isX, setIsX] = useState(true);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState(null);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const symbol = isX ? "X" : "O";

  const onClickHandler = squrId => {
    if (board[squrId] === "") {
      board.map((el, i) => (i === squrId ? (board[i] = symbol) : ""));
      setBoard([...board]);
      setIsX(!isX);
      checkForWinner();
    }
  };

  const checkForWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setIsGameFinished(true);
      }
    }
    //Checks for empty squares in case there is no winner
    let counter = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        counter++;
      }
    }
    if (counter === 0) setIsGameFinished(true);
  };

  const resetGameHandler = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setWinner(null);
    setIsX(true);
    setIsGameFinished(false);
  };

  const squares = board.map((el, i) => {
    return (
      <Square
        key={i}
        squrId={i}
        onClickHandler={onClickHandler.bind(null, i)}
        symbol={el}
      />
    );
  });

  return (
    <>
      <CanvasSC>{squares}</CanvasSC>
      {isGameFinished && (
        <Modal winner={winner} onClickHandler={resetGameHandler} />
      )}
    </>
  );
};

export default Canvas;
