import styled from "styled-components";

export const OneContactWrapper = styled.div`
  width: 332px;
  margin-bottom: 26px;
  @media only screen and (min-width: 768px) {
    width: 431px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 36px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 26px;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 83px;
  height: 83px;
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

export const TitleTags = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: #000;
  margin-bottom: 10px;
`;

export const ListTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ItemsTags = styled.li`
  background-color: #a6a6a6;
  border-radius: 4px;
  padding: 2px 12px;
  font-weight: 500;
  color: #000;
`;
