import React from "react";

const placeHolder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

export const Hero = ({ homebgs }) => {
  const selectedBackground =
    homebgs[Math.floor(Math.random() * homebgs?.length)];

  return (
    <div className="centered-container">
      <div
        className="hero asyncImage"
        data-src={
          document.documentElement.classList.contains("webp")
            ? selectedBackground.webp
            : selectedBackground.fallback
        }
        style={{
          backgroundImage: "url(" + placeHolder + ")",
          maskImage: selectedBackground.custom_gradient
            ? selectedBackground.custom_gradient
            : `-webkit-gradient(
          linear,
          right bottom,
          left top,
          from(rgba(0, 0, 0, 0.5)),
          to(rgba(0, 0, 0, 0))
        )`,
        }}
      ></div>
      <div className="hero-content-container">
        <div className="hero-content">
          <div className="hero-cta">
            <h2>Connecting the Dots</h2>
            <h3>visualization • interactivity • engineering</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
