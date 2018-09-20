import React from 'react';
import PropTypes from 'prop-types';

export default function Text(props) {
  const { text, isHeader } = props;
  return isHeader ? <h4>{text}</h4> : <p>{text}</p>;
}

Text.propTypes = {
  text: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
  ]),
  isHeader: PropTypes.bool.isRequired,
};
