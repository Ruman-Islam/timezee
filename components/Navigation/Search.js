import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Autosuggest from "react-autosuggest";
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
    color: "#21323D",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    borderRadius: "4px",
  },
  suggestion: {
    cursor: "pointer",
    padding: "10px",
  },
  // suggestionHighlighted: {
  //   backgroundColor: "#f2f4f8",
  // },
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
      <div className="flex items-center justify-between">
        <div className="border border-thin">
          <Image
            src="https://res.cloudinary.com/arifscloud/image/upload/v1625119382/image_apxesv.png"
            alt={suggestion.title}
            width={50}
            height={50}
          />
        </div>
        <div className="flex-1 ml-2 hover:text-error">
          <h3>{suggestion.title}</h3>
          <p>${suggestion.sell_price}</p>
        </div>
        <div>
          <button>
            <FontAwesomeIcon
              icon={faCartPlus}
              width={25}
              className="text-neutral hover:text-success duration-100"
            />
          </button>
        </div>
      </div>
    );
  };

  const getSuggestionValue = (value) => {
    return value.title;
  };

  const onSuggestionSelected = (value) => {
    // direct the page of product
    return;
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
  );
};

export default Search;
