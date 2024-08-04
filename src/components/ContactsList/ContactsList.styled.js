import styled from "styled-components";

export const ContactsWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    width: 400px;
  }
  @media only screen and (min-width: 1200px) {
    width: 558px;
  }
`;

export const ContactsListTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #000;
  margin-bottom: 9px;
`;

export const LoadingCard = styled.div`
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 1200px) {
    width: 100px;
  }
`;

export const ErrorCard = styled.div`
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 1200px) {
    width: 100%;
  }
`;

export const ContactList = styled.ul`
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 1200px) {
    width: 100%;
  }
`;

export const Contact = styled.li`
  position: relative;
  padding-left: 15px;
  padding-top: 14px;
  padding-right: 46px;
  padding-bottom: 25px;
  background-color: #ededed;
  border-radius: 4px;
  margin-bottom: 16px;
`;
