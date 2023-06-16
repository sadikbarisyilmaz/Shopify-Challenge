"use client";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { FilmContext } from "../FilmContext";
import Link from "next/link";

export default function page() {
  const { nominated } = useContext(FilmContext);
  const [winner, setWinner] = useState();
  useEffect(() => {
    setWinner(Math.floor(Math.random() * 4));
  }, []);
  console.log(winner);
  return (
    <div className="p-8  flex flex-col justify-center items-center h-screen">
      <main className="p-12 flex flex-col justify-center items-center">
        {nominated
          .filter((film, i) => i === winner)
          .map((film, i) => {
            return (
              <div className="text-center" key={i}>
                <div className="mb-8 text-2xl">
                  ✨
                  <span className="text-xl md:text-3xl font-xl">
                    {" "}
                    THE WINNER IS{" "}
                  </span>
                  ✨
                </div>
                <img className="mb-4" src={film.Poster} alt="Poster" />
                <div className="mb-4">{film.Title}</div>
              </div>
            );
          })}
        <Link className="text-center mt-2" href="/">
          Go Home
        </Link>
      </main>
    </div>
  );
}
