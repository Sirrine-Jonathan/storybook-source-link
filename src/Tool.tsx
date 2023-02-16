import React from "react";
import { Icons, IconButton, TooltipMessage, WithTooltip, IconKey } from "@storybook/components";
import { PARAM_KEY, PREFIX_PARAM_KEY, ICON_PARAM_KEY, INFO_LINK, TOOL_ID } from "./constants";
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

export const getLink = (prefix: string | undefined, link: string | undefined) => {
  if (!link) return null;
  if (prefix) link = `${prefix}${link}`
  return link
}

export const Tool = () => {
  let param_link = useParameter(PARAM_KEY, null)
  let param_prefix = useParameter(PREFIX_PARAM_KEY, null)
  let param_icon = useParameter(ICON_PARAM_KEY, "repository") as IconKey;
  const link = getLink(param_prefix, param_link)

  return (
    link ?
    <IconButton
      key={TOOL_ID}
      title={`View Source Repository: ${link}`}
      active={true}
      onClick={() => {
        if (link){
          window.open(link)
        }
      }}
    >
      <Icons icon={param_icon} />
    </IconButton>
    :
    <WithTooltip placement="top" trigger="click" tooltip={<Tooltip />}>
      <IconButton
        key={TOOL_ID}
        title="View Source Repository"
        active={false}
      >
        <Icons icon={param_icon} />
      </IconButton>
    </WithTooltip>
  );
};
