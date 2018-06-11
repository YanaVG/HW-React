import React from 'react';
import PropTypes from 'prop-types';
import SquadHeroes from './SquadHeroes';
import styles from './HeroesList.css';

const SquadList = ({ heroes, ...props}) => (
            <ul className={styles.list}>
                { heroes.map(hero => (
                <li key={hero.id} className={styles.item}>
                <SquadHeroes { ...hero}{ ...props} />
            </li>
                ))}
            </ul>
    );

SquadList.propTypes = {
    heroes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};



export default SquadList;
