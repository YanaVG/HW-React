
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './shared/Button/Button';
import styles from './SavedSquads.css';

export default class SquadHeroes extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        strength: PropTypes.number,
        intelligence: PropTypes.number,
        speed: PropTypes.number,
        onDeleteFromSquad: PropTypes.func.isRequired,
        onInfoHero: PropTypes.func,  
    };

    static defaultProps = {
        id: '',
        name: '',
        strength: 0,
        intelligence: 0,
        speed: 0,
        onInfoHero: () => null,
        onDeleteFromSquad: () => null,

    };

    handleDelite = () => this.props.onDeleteFromSquad(this.props.id);

    handleInfo = () => {
        const { name, id, strength, intelligence, speed } = this.props; 
        this.props.onInfoHero(id); 

        console.log(`Heroe: ${name}
        strength: ${strength}
        intelligence: ${intelligence}
        speed: ${speed}
        `);
    };

    render() {
        const { name } = this.props; 
        return(      
            <div className={styles.squadWrap}>
                <span>{name}</span>
                    <Button onClick={this.handleDelite} text="Delete" />
                    <Button onClick={this.handleInfo} text="Info" />
            </div>
        );
    }
}
