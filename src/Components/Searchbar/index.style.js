import styled from "styled-components";

export const SearchBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  height: 3.2rem;
  border-radius: 4;
  padding: 10px;
  margin-top: 5rem;

  @media screen and (max-width: 840px) {
    display: flex;
    margin-top: 7rem;
  }
`;

export const SearchBtn = styled.button`
  background-color: #e8415d;
  border-color: transparent;
  font-size: 18px;
  color: #fff;
  position: relative;
  margin-left: 0.5rem;
  top: 1px;
  border-radius: 4px;
  padding: 0.7rem 1rem;
  cursor: pointer;
  @media screen and (max-width: 840px) {
    padding-top: 1rem;
    display: flex;
    width: 60%;
  }
`;
export const SearchText = styled.input`
  border: 1px solid #e8415d;
  border-radius: 4px;
  outline: none;
  height: 3rem;
  width: 20rem;
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: #3d3d3c;
  font-weight: 400;
  padding-left: 15px;
  padding-right: 20px;
  @media screen and (max-width: 840px) {
    width: 12rem;
  }
`;
