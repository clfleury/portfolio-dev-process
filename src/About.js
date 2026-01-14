import React from "react";
import { LoadingIcon } from "./LoadingIcon";

export default class About extends React.Component {
  render() {
    return (
      <div className="fade-in">
        {this.props.loading ? (
          <LoadingIcon />
        ) : (
          <div>
            <div
              className="hero-secondary"
              style={{
                backgroundImage: document.documentElement.classList.contains(
                  "webp",
                )
                  ? "url(" +
                    this.props.data.homebgs[
                      Math.floor(Math.random() * this.props.data.homebgs.length)
                    ].webp +
                    ")"
                  : "url(" +
                    this.props.data.homebgs[
                      Math.floor(Math.random() * this.props.data.homebgs.length)
                    ].fallback +
                    ")",
              }}
            ></div>
            <div className="content">
              <h2 className="page-title">
                ABOUT<strong>•ME</strong>
              </h2>
            </div>
            <div
              className="content"
              style={{
                backgroundColor: "#23294d",
                marginTop: "10px",
                paddingTop: "20px",
              }}
            >
              {this.props.data.about.map(function (data, key) {
                return <p key={key}>{data}</p>;
              }, this)}
            </div>
          </div>
        )}
      </div>
    );
  }
}
