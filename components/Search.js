import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const theme = {
  container: {
    width: "100%",
    position: "relative",
  },
  input: {
    width: "100%",
    borderRadius: "4px",
    border: "0",
    outline: "0",
    placeholder: "red",
    color: "black",
    padding: "7px 8px",
    fontSize: "14px",
  },
  suggestionsContainerOpen: {
    position: "absolute",
    top: "40px",
    left: "0",
    right: "0",
    width: "100%",
    margin: "auto",
    maxHeight: "400px",
    overflowX: "hidden",
    overflowY: "auto",
    backgroundColor: "white",
    color: "black",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    borderRadius: "4px",
  },
  suggestion: {
    cursor: "pointer",
    padding: "10px",
  },
  suggestionHighlighted: {
    backgroundColor: "#f2f4f8",
  },
};

const Search = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = ({ value }) => {
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;
      if (inputLength === 0) {
      setSuggestions([]);
    } else {
      const url = `https://boighor-server.vercel.app/api/v1/book/search?char=${inputValue}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setSuggestions(data.result);
        });
    }
  };

  const renderSuggestion = (suggestion) => {
    return (
      <div className="flex">
        <div className="border">
          <Image
            src="https://res.cloudinary.com/arifscloud/image/upload/v1625119382/image_apxesv.png"
            alt={suggestion.title}
            width={50}
            height={50}
          />
        </div>
        <div className="flex-1 ml-2">
          <h3>{suggestion.title}</h3>
          <p>${suggestion.sell_price}</p>
        </div>
      </div>
    );
  };

  const getSuggestionValue = (value) => {
    return value;
  };

  const onSuggestionSelected = (value) => {
    // direct the page of product
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Search here...",
    value,
    onChange: onChange,
  };
  return (
    <div className="max-w-7xl mx-auto relative flex items-center">
      <Autosuggest
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        suggestions={suggestions}
        inputProps={inputProps}
        theme={theme}
      />
      <div className="py-2 px-3 bg-[#00586D] absolute right-0  rounded-r">
        <FontAwesomeIcon icon={faSearch} width={20} />
      </div>
    </div>
  );
};

export default Search;
