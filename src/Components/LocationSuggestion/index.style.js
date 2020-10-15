import styled from "styled-components";

export const LocationContainer = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 5%;
`;
export const LocationInfo = styled.div``;

export const SuggetionContainer = styled.div`
  display: flex;
  background: white;
  color: #e84118;
  width: 22.4rem;
  height: 3.5rem;
  border-bottom: 1px solid grey;
  border-radius: 5px;
  margin-top: 0.3rem;
  margin-left: -7.9rem;
  @media screen and (max-width: 840px) {
    margin-top: 4rem;
    margin-bottom: -4rem;
    width: 14rem;
    margin-left: -7.5rem;
    font-size: 1.2rem;
  }
`;

export const Icon = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 0.5rem;
`;

export const TextLess3 = styled.div`
  display: flex;
  background: white;
  color: #e84118;
  width: 20.4rem;
  padding: 1rem;
  margin-left: -7.8rem;
  margin-top: 0.3rem;
  border-bottom: 1px solid grey;
  border-radius: 5px;
  @media screen and (max-width: 840px) {
    margin-top: 4rem;
    width: 12rem;
    margin-left: -7.5rem;
    font-size: 1rem;
  }
`;
export const ResultName = styled.div`
  font-size: 1rem;
  cursor: pointer;
  margin-top: -0.1rem;
`;
