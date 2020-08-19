import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { Illustrations, CloseIcon } from "../assets";
import { PrimaryButton } from "./Buttons";
import { useSpring, animated } from "react-spring";

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: centre;
  align-items: centre;
  position: relative;
  border-radius: 2px;
`;

const SignInHeader = styled.h3`
  font-size: ${(props) => typeScale.header3};
`;

const TextContent = styled.p`
  font-size: ${(props) => typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const ModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute:
  right: 40px;
  top: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
  
`;

export const SignInModal = ({ useShowModal, setUseShowModal }) => {
  const animation = useSpring({
    opacity: useShowModal ? 1 : 0,
    transform: useShowModal ? `translateY(0%)` : `translateY(-200%)`,
  });
  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img
          src={Illustrations.SignIn}
          alt="Sign up for an account"
          aria-hidden="true"
        />
        <SignInHeader>Sign Up</SignInHeader>
        <TextContent>Sign In Today To Get Access</TextContent>
        <PrimaryButton>Sign Up</PrimaryButton>
        <ModalButton aria-label="close modal">
          <CloseIcon />
        </ModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
