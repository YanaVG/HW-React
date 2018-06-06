import React from 'react';
import PropTypes from 'prop-types';

const CapacityTitle = ({ value }) => <h2>{value}</h2>;

CapacityTitle.propTypes = {
  value: PropTypes.string.isRequired,
};

// CapacityTitle.defaultProps = {
//   value: 0,
// }
export default CapacityTitle;