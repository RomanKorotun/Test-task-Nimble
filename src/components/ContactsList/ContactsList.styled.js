import styled from "styled-components";

export const ContactsListTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #000;
  margin-bottom: 9px;
`;

export const LoadingCard = styled.div`
  @media only screen and (min-width: 768px) {
    width: 400px;
  }
  @media only screen and (min-width: 1200px) {
    width: 558px;
  }
`;

export const ErrorCard = styled.div`
  @media only screen and (min-width: 768px) {
    width: 400px;
  }
  @media only screen and (min-width: 1200px) {
    width: 558px;
  }
`;

export const ContactList = styled.ul`
  @media only screen and (min-width: 768px) {
    width: 400px;
  }
  @media only screen and (min-width: 1200px) {
    width: 558px;
  }
`;

export const ContactListItem = styled.li`
  position: relative;
  padding-left: 15px;
  padding-top: 14px;
  padding-right: 46px;
  padding-bottom: 25px;
  background-color: #ededed;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const UserWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`;

export const Image = styled.img`
  width: 59px;
  height: 59px;
  border-radius: 50%;
`;

export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`;

export const FirstName = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #000;
`;

export const LastName = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #000;
`;

export const ListTags = styled.ul`
  margin-left: 70px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ItemsTags = styled.li`
  background-color: #a6a6a6;
  border-radius: 4px;
  padding: 2px 12px;
  font-weight: 500;
  color: #000;
`;

export const ButtonClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 9px;
  right: 19px;
  background-color: transparent;
  padding: 0;
  border-radius: 50%;
  height: 24px;
  width: 24px;
`;
