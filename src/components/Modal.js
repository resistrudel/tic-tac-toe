import styled from "styled-components";

const ModalOverlaySC = styled.div`
  margin: 0 auto;
  z-index: 10;
  position: fixed;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  background: white;
  top: 40%;
  left: 45%;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  animation: slide-down 500ms ease-out forwards;
  display: flex;
  flex-direction: column;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const BackdropSC = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 5;
`;

const Modal = props => {
  return (
    <>
      <BackdropSC onClick={props.onClickHandler} />
      <ModalOverlaySC>
        <h2>{props.winner ? `${props.winner} won` : `Draw`}</h2>
        <button onClick={props.onClickHandler}>Play again</button>
      </ModalOverlaySC>
    </>
  );
};

export default Modal;
