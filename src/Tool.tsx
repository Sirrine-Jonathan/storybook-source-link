import React from "react";
import { Icons, IconButton, TooltipMessage, WithTooltip } from "@storybook/components";
import { TOOL_ID } from "./constants";
import { PARAM_KEY, INFO_LINK } from "./constants";
import { useParameter } from '@storybook/api';

const Tooltip = () => (
  <TooltipMessage
    title="Repository Link"
    desc={`No repository link set in this story`}
    links={[{ title: 'More Info', onClick: () => {
      window.open(INFO_LINK)
    }}]}
  />
);

export const Tool = () => {
  const link = useParameter(PARAM_KEY, null);

  return (
    link ?
    <IconButton
      key={TOOL_ID}
      title="View Source Repository"
      active={true}
      onClick={() => {
        if (link){
          window.open(link)
        }
      }}
    >
      <Icons icon="repository" />
    </IconButton>
    :
    <WithTooltip placement="top" trigger="click" tooltip={<Tooltip />}>
      <IconButton
        key={TOOL_ID}
        title="View Source Repository"
        active={false}
      >
        <Icons icon="repository" />
      </IconButton>
    </WithTooltip>
  );
};
