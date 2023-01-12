import React from "react";
import { IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";
import { SOURCE_PARAM_KEY, DESIGN_PARAM_KEY } from "./constants";
import { useParameter } from "@storybook/api";

// test change

const textStyles = {
  marginLeft: "8px",
};

const FigmaLogoIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="21" cy="21" r="7" fill="#1ABCFE" />
    <path
      d="M14 14H7C3.13401 14 4.76837e-07 17.134 4.76837e-07 21V21C4.76837e-07 24.866 3.13401 28 7 28H14V14Z"
      fill="#A259FF"
    />
    <path
      d="M14 28H7C3.13401 28 4.76837e-07 31.134 4.76837e-07 35V35C4.76837e-07 38.866 3.14765 42 7.01365 42V42C10.8646 42 14 38.8782 14 35.0272V28Z"
      fill="#0ACF83"
    />
    <path
      d="M14 0H7C3.13401 0 4.76837e-07 3.13401 4.76837e-07 7V7C4.76837e-07 10.866 3.13401 14 7 14H14V0Z"
      fill="#F24E1E"
    />
    <path
      d="M14 0H21C24.866 0 28 3.13401 28 7V7C28 10.866 24.866 14 21 14H14V0Z"
      fill="#FF7262"
    />
  </svg>
);

const GitHubLogo = () => (
  <svg
    height="32"
    widths="32"
    aria-hidden="true"
    viewBox="0 0 16 16"
    version="1.1"
    width="32"
    data-view-component="true"
  >
    <path
      fill="white"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    ></path>
  </svg>
);

export const Tool = () => {
  const sourceLink = useParameter(SOURCE_PARAM_KEY, null);
  const designLink = useParameter(DESIGN_PARAM_KEY, null);

  return (
    <>
      {sourceLink && (
        <IconButton
          key={`source-${TOOL_ID}`}
          title="View Source Code"
          active={true}
          onClick={() => window.open(sourceLink)}
        >
          <GitHubLogo />
          <span style={textStyles}>Source code</span>
        </IconButton>
      )}
      {designLink && (
        <IconButton
          key={`design-${TOOL_ID}`}
          title="View Design in Figma"
          active={true}
          onClick={() => window.open(designLink)}
        >
          <FigmaLogoIcon />
          <span style={textStyles}>Figma</span>
        </IconButton>
      )}
    </>
  );
};
