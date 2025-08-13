import React, { useEffect } from "react";
import { LoadingIcon } from "./LoadingIcon";
import { Hero } from "./Hero";

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
