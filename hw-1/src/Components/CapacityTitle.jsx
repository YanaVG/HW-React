import React from 'react';
import PropTypes from 'prop-types';

const CapacityTitle = ({ value }) => <h2>{value}</h2>;

CapacityTitle.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CapacityTitle;