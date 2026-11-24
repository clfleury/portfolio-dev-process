import React, { useEffect } from "react";
import { LoadingIcon } from "./icons/LoadingIcon.js";
import { Hero } from "./Hero.js";

export const Home = ({ loadImages, data, loading }) => {
  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return (
    <div className="home fade-in">
      {loading ? (
        <LoadingIcon />
      ) : (
        <div>
          <Hero homebgs={data?.homebgs} />
        </div>
      )}
    </div>
  );
};
