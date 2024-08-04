import styled from "styled-components";

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
  flex-wrap: wrap;
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
