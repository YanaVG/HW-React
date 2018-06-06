import React from 'react';
import PropTypes from 'prop-types';
import SquardHeroes from './Heroe';
import styles from './HeroesList.css';

const SquardList = ({ squads, ...props}) => (
    <ul className={styles.list}>
    { squads.map(squad => (
        <li key={squad.id} className={styles.item}>
        <SquardHeroes { ...squad}{ ...props} />
        </li>
    ))}
   </ul>
);

SquardList.propTypes = {
    squads: PropTypes.shape().isRequired,
};
export default SquardList;