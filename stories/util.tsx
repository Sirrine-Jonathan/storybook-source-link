import React from 'react'
import { getLink } from '../src/Tool';
import { PREFIX_PARAM_KEY, PARAM_KEY } from '../src/constants';

type Params = {
  [key: string]: string | undefined,
  [PREFIX_PARAM_KEY]?: string,
  [PARAM_KEY]?: string
}

type ParamCombinations = {
  BOTH: Params,
  JUST_PREFIX: Params,
  JUST_LINK: Params,
  NONE: Params
}

type ParamConfigs = {
  [key: string]: ParamCombinations,
  STORY_PARAMETERS: ParamCombinations,
  COMPONENT_PARAMETERS: ParamCombinations,
  PREVIEW_PARAMETERS: ParamCombinations,
};

const getName = (preview_key, component_key, story_key) => {
    return `${preview_key}:${component_key}:${story_key}`
}

// get all configurations of a story given a component
export const getStories = (Component: any) => {
    const stories = {}
    // loop over each preview parameter configuration
    for (const [preview_key, preview_params] of Object.entries(PARAMETERS.PREVIEW_PARAMETERS)) {
        // loop over each component parameter configuration
        for (const [component_key, component_params] of Object.entries(PARAMETERS.COMPONENT_PARAMETERS)){
            // loop over each story parameter configuration
            for (const [story_key, story_params] of Object.entries(PARAMETERS.STORY_PARAMETERS)) {

                // build the story given the param config
                const story = (args) => <Component {...args} />;
                const title = getName(preview_key, component_key, story_key);
                const rawParams = { story_params, component_params, preview_params};
                const resolvedParams = resolveParams(story_params, component_params, preview_params)
                const link = getLinkFromParams(resolvedParams);
                story.storyName = title;
                story.args = {
                    title,
                    rawParams,
                    resolvedParams,
                    link
                }
                stories[story.args.title] = story;

            }
        }
    }
    return stories;
}

export const PARAMETERS: ParamConfigs = (() => {
  const params = {} as ParamConfigs;
  ['story', 'component', 'preview'].forEach((level: string) => {
    const key: string = `${level.toUpperCase()}_PARAMETERS`;
    params[key] = {
      BOTH: {
        [PREFIX_PARAM_KEY]: `${level}-prefix`,
        [PARAM_KEY]: `${level}-link`
      },
      JUST_PREFIX: {
        [PREFIX_PARAM_KEY]: `${level}-prefix`,
      },
      JUST_LINK: {
        [PARAM_KEY]: `${level}-link`
      },
      NONE: {}
    }
  })
  return params;
})()

export const resolveParams = (story_params: Params, component_params: Params, preview_params: Params): Params => {
  const params = {} as Params;
  [PREFIX_PARAM_KEY, PARAM_KEY].forEach((KEY) => {
    [preview_params, component_params, story_params].forEach((param_level: Params) => {
      if (param_level[KEY]) params[KEY] = param_level[KEY];
    })
  })
  return params;
}

export const getLinkFromParams = (params: Params): string | null => {
  let param_link = params?.[PARAM_KEY];
  let param_prefix = params?.[PREFIX_PARAM_KEY];
  if (param_link && param_prefix){
    param_prefix += ':';
  }
  return getLink(param_prefix, param_link)
}