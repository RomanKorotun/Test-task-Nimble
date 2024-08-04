import styled from "styled-components";
import { Form, Field } from "formik";

export const FormStyled = styled(Form)`
  width: 332px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (min-width: 768px) {
    width: 431px;
    gap: 24px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  border: 1px solid #aaa;
  border-radius: 8px;
  padding: 12px;
`;

export const ButtonStyled = styled.button`
  border: 1px solid #aaa;
  border-radius: 4px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  background-color: transparent;
  color: #000;
`;
