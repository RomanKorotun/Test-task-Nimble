import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const ContactsFormCard = styled.div`
  @media only screen and (max-width: 767px) {
    width: 280px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 33px;
  }
  @media only screen and (min-width: 768px) {
    position: sticky;
    height: 100%;
    top: 36px;
    width: 260px;
  }
  @media only screen and (min-width: 1200px) {
    width: 300px;
  }
`;

export const FormStyled = styled(Form)`
  width: 100%;
  margin-bottom: 20px;
`;

export const TitleForm = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #000;
  margin-bottom: 6px;
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  &:not(:last-of-type) {
    margin-bottom: 14px;
  }
  &:last-of-type {
    margin-bottom: 24px;
  }
`;

export const LabelTitle = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.66667;
  color: #000;
  margin-left: 6px;
`;

export const FieldStyled = styled(Field)`
  border: 1px solid #aaa;
  border-radius: 8px;
  padding: 14px 12px;
`;

export const ErrorMsgStyled = styled(ErrorMessage)`
  color: #eb4c42;
  position: absolute;
  left: 0;
  bottom: -18px;
  font-size: 12px;
  margin-left: 6px;
`;

export const ButtonSubmitForm = styled.button`
  border: 1px solid #aaa;
  background-color: transparent;
  border-radius: 8px;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  color: #000;
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border-radius: 50%;
`;
