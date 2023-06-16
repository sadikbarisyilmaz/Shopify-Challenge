import { useContext } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FilmContext } from "./FilmContext";
function SearchItem() {
  const { films, nominated, setNominated, nominatedID, setNominatedID } =
    useContext(FilmContext);

  const handleClick = (film, e) => {
    if (nominated.length < 5 && !nominated.includes(film)) {
      setNominated([...nominated, film]);
      setNominatedID([...nominatedID, film.imdbID]);
    } else {
      console.log("No more than 5");
    }
  };

  return (
    <List>
      {films !== undefined ? (
        films.slice(0, 5).map((film, i) => {
          return (
            <ListItem key={i} disablePadding>
              <ListItemButton
                disabled={nominatedID.includes(film.imdbID) && true}
                onClick={(e) => handleClick(film, e)}
              >
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
        <div className="loader"></div>
      )}
    </List>
  );
}

export default SearchItem;
