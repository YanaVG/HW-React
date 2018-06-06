import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css'

const Button = ({ text, onClick }) => <button className={styles.button}onClick={onClick}>{text}</button>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;