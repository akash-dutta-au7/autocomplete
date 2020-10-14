import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import "../../App.css";

import { SearchBox, SearchBtn, SearchText } from "./index.style";

import LocationSuggestion from "../LocationSuggestion";
const Search = () => {
  const [display, setDisplay] = useState(false);
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://base.amberstudent.com/api/v0/regions?sort_key=search_name&sort_order=desc&states=active&search_name=${locations}`
      )
      .then((response) => {
        setLocations(response.data.data.result);
        console.log(response.data.data.result);
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
          placeholder="Type to search"
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
          key={locations.id}
        />
      </div>
    </div>
  );
};

export default Search;
