/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import { fontSizes, fontSpacings } from "./styling/font-styles";

export const SiteHeaderTitle = ({ title }) => {
  return (
    <h1
      css={css`
        margin: 0px;
        text-transform: lowercase;
        font-weight: 300;
        letter-spacing: ${fontSpacings.small};
        font-size: ${fontSizes.small};
        strong {
          font-size: ${fontSizes.small};
        }
      `}
    >
      <strong>{title}</strong>
    </h1>
  );
};
