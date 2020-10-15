import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import "../../App.css";
import { v4 as uuidv4 } from "uuid";

import { SearchBox, SearchBtn, SearchText } from "./index.style";

import LocationSuggestion from "../LocationSuggestion";
const Search = () => {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("");
  const key = uuidv4();
  useEffect(() => {
    axios
      .get(
        `https://base.amberstudent.com/api/v0/regions?sort_key=search_name&sort_order=desc&states=active&search_name=${locations}`
      )
      .then((response) => {
        setLocations(response.data.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

  const searchChange = (event) => {
    setSearch(event.target.value);
  };

  const searchLocation = locations.filter((location) => {
    return location.name.toLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div>
      <SearchBox>
        <SearchText
          type="text"
          placeholder="Search by College or City"
          value={search}
          onChange={searchChange}
        />
        <SearchBtn>
          {" "}
          <AiOutlineSearch size={20} /> Search
        </SearchBtn>
      </SearchBox>
      <div>
        <LocationSuggestion
          searchLocation={searchLocation}
          search={search}
          key={key}
        />
      </div>
    </div>
  );
};

export default Search;
