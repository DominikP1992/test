import React from 'react';
import PropTypes from 'prop-types';

const Example = ({ children }) => <div>{children}</div>;

Example.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default Example;
