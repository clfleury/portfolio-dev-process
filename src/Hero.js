import React from "react";
import data from "./data.json";

const placeHolder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

export const Hero = () => {
    return (
        <div className="centered-container">
        <div
            className="hero asyncImage"
            data-src={
            document.documentElement.classList.contains("webp")
                ? data?.homebgs[
                    Math.floor(Math.random() * data?.homebgs?.length)
                ].webp
                : data?.homebgs[
                    Math.floor(Math.random() * data?.homebgs?.length)
                ].fallback
            }
            style={{ backgroundImage: "url(" + placeHolder + ")" }}
        >

          </div>
          <div className="hero-content-container">
                <div className="hero-content">
                    <div className="hero-cta">
                    <h2>Connecting the Dots</h2>
                    <h3>visualization\interactivity\engineering</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
          <div className="hero-content-container">
                <div className="hero-content">
                {
                <svg version="1.1" id="svgDiv" viewBox="0 0 718.6 510.6">
                    <path
                    className="st0 letters"
                    d="M26.7,43.1l163.3-10.4c0,0-49.3,34.3-60.8,77.1c-17.8,65.9-24.3,190.2-2.1,257.8 c15.1,45.8,84.7,29.2,100.4,26.8c15.6-2.4,138.8-26.8,279.3,23.4C359.3,409,247,409,45.7,499.1C45.7,499.1,141.3,171,26.7,43.1z"
                    ></path>
                    <path
                    className="st0 letters"
                    d="M229.5,86.6c0,0-75.6-11.6-80.7,141.3c-5,148.1,73.6,138,73.6,138S311,381.5,311,238.8 C311,73.1,229.5,86.6,229.5,86.6z M230.7,329.1c0,0-38.5,10-38.5-101.5c0-102.6,38.5-100.9,38.5-100.9s36-7.2,36,97 C266.7,335.8,230.7,329.1,230.7,329.1z"
                    ></path>
                    <path
                    className="st0 letters"
                    d="M479.2,38.1c0,0,46.2,34.3,46.2,82.9s6.1,210.7-22.6,244.8c0,0,37.7,14.5,51.1,26.2V285 c0,0,123.8,88.6,53.5,150.5c0,0,87-5.6,60.2-69.7c0,0-46.2-69.1-92.2-115.9c0,0,60.4-147.7,129-167.5l-92,10.3 c0,0,19.2-2.1-55.2,108.7v-119L479.2,38.1z"
                    ></path>
                    <path
                    className="st0 letters"
                    d="M410.1,86.6c0,0-75.6-11.6-80.7,141.3c-5,148.1,73.6,138,73.6,138s88.6,15.6,88.6-127.1 C491.6,73.1,410.1,86.6,410.1,86.6z M411.3,329.1c0,0-38.5,10-38.5-101.5c0-102.6,38.5-100.9,38.5-100.9s36-7.2,36,97 C447.3,335.8,411.3,329.1,411.3,329.1z"
                    ></path>
                </svg>
                }
                <div className="hero-cta">
                <h2>AROUND YOU.</h2>
                <h3>
                    {" "}
                    BE<strong>\HUMBLED.</strong> BE<strong>\CURIOUS.</strong> BE
                    <strong>\INSPIRED.</strong>
                </h3>
                </div>
            </div>
            </div>
            */

