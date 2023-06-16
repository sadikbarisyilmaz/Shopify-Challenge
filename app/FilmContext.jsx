"use client";
import { useState, useEffect } from "react";
import React from "react";

const FilmContext = React.createContext();

function FilmProvider({ children }) {
  const [films, setFilms] = useState();
  const [input, setInput] = useState("");
  const [nominated, setNominated] = useState([]);
  const [nominatedID, setNominatedID] = useState([]);
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${input}&apikey=559d978c`)
      .then((res) => res.json())
      .then((data) => setFilms(data.Search));
  }, [input]);

  return (
    <FilmContext.Provider
      value={{
        films,
        setFilms,
        input,
        setInput,
        nominated,
        setNominated,
        nominatedID,
        setNominatedID,
      }}
    >
      {children}
    </FilmContext.Provider>
  );
}
export { FilmContext, FilmProvider };
