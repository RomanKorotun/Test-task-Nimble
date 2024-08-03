import styled from "styled-components";

export const ContactsContainerPosition = styled.div`
  display: flex;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    justify-content: center;
    gap: 38px;
  }

  @media only screen and (min-width: 1200px) {
    justify-content: center;
    gap: 38px;
  }
`;
