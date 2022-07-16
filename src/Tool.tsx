import React from "react";
import { Icons, IconButton, TooltipMessage, WithTooltip } from "@storybook/components";
import { PARAM_KEY, PREFIX_PARAM_KEY, INFO_LINK, TOOL_ID } from "./constants";
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
  let link = useParameter(PARAM_KEY, null);
  let prefix = useParameter(PREFIX_PARAM_KEY, null)
  if (!link) prefix = null // let's not allow a prefix without a link
  if (prefix) link = `${prefix}${link}`

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
