import styled from "styled-components";

export const Heading = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  margin-top: 10rem;
  @media screen and (max-width: 840px) {
    margin-left: -0.5rem;
  }
`;

export const MainHeading = styled.h1`
  color: #ffffff;
  font-size: 3.5rem;
  font-weight: 400;
`;
export const SubHeading = styled.p`
  color: #ffffff;
  font-size: 1.7rem;
  font-weight: 400;
  margin-top: -2.2rem;
  @media screen and (max-width: 840px) {
    font-size: 1.5rem;
  }
`;
