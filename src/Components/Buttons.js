import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale, helperText, header5, paragraph } from "../utils";
import { withTheme } from "styled-components";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: (props) => `
    background: none;
    color: ${props.theme.status.warningColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover};
      outline: 3px solid ${props.theme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${props.theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: (props) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonWarning: (props) => `
    border: 2px solid ${props.theme.status.warningColor};
  `,
  error: (props) => `
    background: none;
    color: ${props.theme.status.errorColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.errorColorHover};
      outline: 3px solid ${props.theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.theme.status.errorColorActive};
    }
  `,
  primaryButtonError: (props) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonError: (props) => `
    border: 2px solid ${props.theme.status.warningColor};
  `,
  success: (props) => `
    background: none;
    color: ${props.theme.status.successColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.successColorHover};
      outline: 3px solid ${props.theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: (props) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonSuccess: (props) => `
    border: 2px solid ${props.theme.status.warningColor};
  `,
};

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorOnPrimary};
  border: 2px solid transparent;

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  &:disabled {
    cursor: not-allowed;
    background: none;
    border: 2px solid ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${(props) => props.theme.primaryColor};

  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${(props) => props.theme.textOnDisabled};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;
