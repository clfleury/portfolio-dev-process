/** @jsx jsx */
import React from "react";
import { LoadingIcon } from "./icons/LoadingIcon";
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import { colors } from "./styling/colors";

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
              css={css`
                background-color: ${colors.lightBlue};
                margin-top: "10px";
                padding: 2rem 4rem 3rem;
                box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
              `}
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
