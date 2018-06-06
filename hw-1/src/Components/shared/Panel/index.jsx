import React from 'react';
import PropTypes from 'prop-types';
import styles from'./style.css';

const Panel = ({ children }) => (
 <div className={styles.panel}>
    {children}
 </div>
);

Panel.propTypes = {
    children: PropTypes.shape(),
};  

Panel.defaultProps = {
    children: {},
};
export default Panel;