import React from "react";
import PropTypes from "prop-types";
import { PREFIX_PARAM_KEY, PARAM_KEY } from '../../src/constants';
import { Wrapper, Header, Section } from '../StyledComponents';

export const Output = ({ title, rawParams, resolvedParams, link }) => (
  <Wrapper
    data-testid={title}
    data-prefix={resolvedParams?.[PREFIX_PARAM_KEY]}
    data-link={resolvedParams?.[PARAM_KEY]}
    data-final={link}
  >
    <Header>
      <h1>{title}</h1>
      <h2>Link: <code>{link}</code></h2>
    </Header>
    <Section>
      <h3>Raw Params</h3>
      <pre>
        <code>
          {JSON.stringify(rawParams, null, 2)}  
        </code>
      </pre>
    </Section>
    <Section>
      <h3>Resolved Params</h3>
      <pre>
        <code>
          {JSON.stringify(resolvedParams, null, 2)}  
        </code>
      </pre>
    </Section>
  </Wrapper>
);

Output.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string
};