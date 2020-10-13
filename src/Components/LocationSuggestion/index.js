import React from "react";
import _ from "lodash";
import { GoLocation } from "react-icons/go";
import "../../App.css";
const LocationSuggestion = ({ searchLocation, search }) => {
  return (
    <div className="locations">
      {!searchLocation ? (
        <h3>No location found</h3>
      ) : search.length >= 3 ? (
        searchLocation.map((location) => (
          <div className="suggetion-container">
            <div className="icon">
              <GoLocation />
            </div>
            <div className="location-info">
              <h3 key={location.id}>{location.name}</h3>
            </div>
          </div>
        ))
      ) : search.length >= 1 && search.length < 3 ? (
        <h3>Type minimun 3 character</h3>
      ) : null}
    </div>
  );
};

export default LocationSuggestion;
