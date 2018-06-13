
import React from 'react';
import PropTypes from 'prop-types';
import Button from './shared/Button/Button';
import styles from './SavedSquads.css';

const handleDelite = () => this.props.onDeleteSquad(this.props.id);

const SavedSquads = ({ savedSquadsOfHeroe }) => (
    <div className={styles.wrap}>
        <div>
            <p>Heroes</p>
            <p>{savedSquadsOfHeroe.heroes}</p>
        </div>
        <div>
            <p>Stats</p>
            <p>{savedSquadsOfHeroe.strength}</p>
            <p>{savedSquadsOfHeroe.intelligence}</p>
            <p>{savedSquadsOfHeroe.speed}</p>
        </div>
        <Button text="Delete" onClick={handleDelite}/>
    </div>
);

SavedSquads.propTypes = {
    // id: PropTypes.string.isRequired,
    savedSquadsOfHeroe: PropTypes.shape().isRequired,
    // onDeleteSquad: PropTypes.func.isRequired,
};

export default SavedSquads;