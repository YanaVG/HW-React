import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './shared/Button/Button';

export default class Heroe extends Component {
    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        strength: PropTypes.number,
        intelligence: PropTypes.number,
        speed: PropTypes.number,
        onDeleteHero: PropTypes.func.isRequired,
        onInfoHero: PropTypes.func.isRequired,
        onAddHero: PropTypes.func.isRequired,
    };

    static defaultProps = {
        id: '',
        name: '',
        strength: 0,
        intelligence: 0,
        speed: 0,
    }

    handleDelete = () => this.props.onDeleteHero(this.props.id);

    handleAdd = () => this.props.onAddHero(this.props.id);

    handleInfo = () => {
        const { name, id, strength, intelligence, speed, onInfoHero } = this.props;
        onInfoHero(id);
        // console.log(this.state.hero);

      
        console.log(`Heroe: ${name}
        strength: ${strength}
        intelligence: ${intelligence}
        speed: ${speed}
        `);
    };

    render() {
        const { name } = this.props;
        return(
           <div>
                <span>{name}</span>
                <div> 
                    <Button onClick={this.handleAdd} text="Add" />
                    <Button onClick={this.handleDelete} text="Delete" />
                    <Button onClick={this.handleInfo} text="Info" />
                </div>
                
           </div> 

        );
    }
}



