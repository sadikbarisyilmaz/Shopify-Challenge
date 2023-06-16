"use client";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useContext } from "react";
import SearchItem from "./SearchItem";
import Nominated from "./Nominated";
import { FilmContext } from "./FilmContext";
import Link from "next/link";
export default function Home() {
  const { films, setInput, nominated } = useContext(FilmContext);
  return (
    <div className="p-8">
      <main className="md:p-14 grid gap-4 md:gap-14 justify-center">
        <div>
          <div className="text-xl text-center mb-8">
            <h1 className="text-3xl font-extrabold mb-4">Welcome To Rater!</h1>
            <h2 className="text-xl font-lg">Nominate Your Favorite Films</h2>
            <h3>Search the films you want to nominate below: </h3>
          </div>
          <div className=" grid text-center gap-4 md:flex justify-around align-center">
            <TextField
              id="input"
              // label="Search"
              variant="standard"
              placeholder="Search"
              onChange={(e) => setInput(e.target.value)}
            />
            <div className=" grid items-center">
              <div>Nominated: {nominated.length}/5</div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-10">
            <Box
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "#DDE6ED",
              }}
            >
              <nav aria-label="main mailbox folders">
                <SearchItem />
              </nav>
            </Box>
            <Box
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "#DDE6ED",
              }}
            >
              <nav aria-label="main mailbox folders">
                <Nominated />
              </nav>
            </Box>
          </div>
        </div>
        {nominated.length === 5 && (
          <div className="text-center">
            <h3 className="text-xl font-semibold">Great Choises!</h3>
            <Link className="text-center mt-2" href="/winner">
              Click Here To Reveal The Winner
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
