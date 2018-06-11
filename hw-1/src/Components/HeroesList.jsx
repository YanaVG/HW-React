import React from 'react';
import PropTypes from 'prop-types';
import Heroe from './Heroe';
import styles from './HeroesList.css';

const HeroesList = ({ heroes, ...props}) => (
    <ul className={styles.list}>
    { heroes.map(hero => (
        <li key={hero.id} className={styles.item}>
        <Heroe { ...hero}{ ...props} />
        </li>
    ))}
   </ul>
);

HeroesList.propTypes = {
    heroes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};
export default HeroesList;