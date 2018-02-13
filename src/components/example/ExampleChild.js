import React from 'react';
import PropTypes from 'prop-types';
import Btn from '../generic/Btn';

const ExampleBtn = ({ onClick, children, className }) => (
  <div>
    <Btn className={className} onClick={onClick}>
      {children}
    </Btn>
  </div>
);

ExampleBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default ExampleBtn;
