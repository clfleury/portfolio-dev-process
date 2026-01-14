/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import { colors } from "./styling/colors";
import React from "react";

export const ModalHeader = ({ projectCategory, projectName, projectDate }) => {
  return (
    <>
      <h4
        className="fade-in"
        css={css`
          color: ${colors.white};
          clear: both;
          user-select: none;
          font-style: italic;
          fontweight: bold;
          margin-bottom: -0.6rem;
        `}
      >
        {projectCategory}
      </h4>
      <h2
        className="fade-in"
        css={css`
          color: ${colors.white};
          clear: both;
          user-select: none;
          line-height: 0.8;
        `}
      >
        {projectName}
      </h2>
      <h3
        className="fade-in"
        css={css`
          color: ${colors.white};
          clear: both;
          user-select: none;
          line-height: 0;
          padding-bottom: 40px;
        `}
      >
        {projectDate}
      </h3>
    </>
  );
};
