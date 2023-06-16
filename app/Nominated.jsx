import React from "react";
import { useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FilmContext } from "./FilmContext";
function Nominated() {
  const { nominated, setNominated, nominatedID, setNominatedID } =
    useContext(FilmContext);

  const handleClick = (film) => {
    setNominated(nominated.filter((nomFilm) => nomFilm.imdbID !== film.imdbID));
    setNominatedID(
      nominatedID.filter((nomFilmID) => nomFilmID !== film.imdbID)
    );
  };

  return (
    <List>
      {nominated !== undefined ? (
        nominated.slice(0, 5).map((film, i) => {
          return (
            <ListItem key={i} disablePadding>
              <ListItemButton onClick={() => handleClick(film)}>
                <div className="flex gap-4">
                  <div className="w-2/12">
                    <img src={`${film.Poster}`} alt="Poster" />
                  </div>
                  <ListItemText primary={`${film.Title}`} />
                  <ListItemText primary={`${film.Year}`} />
                </div>
              </ListItemButton>
            </ListItem>
          );
        })
      ) : (
        <ListItemText primary="none" />
      )}
    </List>
  );
}

export default Nominated;
