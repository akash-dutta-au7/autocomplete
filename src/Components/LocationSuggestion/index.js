import React from "react";
import _ from "lodash";
import { GoLocation } from "react-icons/go";
import "../../App.css";

import {
  Location,
  SuggetionContainer,
  Icon,
  TextLess3,
  ResultName,
} from "./index.style";
const LocationSuggestion = ({ searchLocation, search }) => {
  return (
    <Location>
      {!searchLocation ? (
        <h3>No location found</h3>
      ) : search.length >= 3 ? (
        searchLocation.map((location) => (
          <SuggetionContainer>
            <Icon>
              <GoLocation />
            </Icon>
            <ResultName>
              <p key={location.id}>{location.name}</p>
            </ResultName>
          </SuggetionContainer>
        ))
      ) : search.length >= 1 && search.length < 3 ? (
        <TextLess3>Type minimun 3 character</TextLess3>
      ) : null}
    </Location>
  );
};

export default LocationSuggestion;
