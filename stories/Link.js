import React from 'react';
import PropTypes from 'prop-types';
import './link.css';

export const Link = ({ href, text }) => (
  <a href={href} target="_blank">{text}</a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
