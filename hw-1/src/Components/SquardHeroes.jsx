/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './shared/Button/Button';

export default class Heroe extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        strength: PropTypes.number,
        intelligence: PropTypes.number,
        speed: PropTypes.number,
        onGetSquadsHeroes: PropTypes.func.isRequired,
        onDeleteHeroe: PropTypes.func.isRequired,
        onInfoHeroe: PropTypes.func.isRequired,
        
    };

    static defaultProps = {
        strength: 0,
        intelligence: 0,
        speed: 0,
    };
  
    handleAdd = () => {
        this.props.onGetSquadsHeroes(this.props.id);
        // const { id } = this.props;
    }
    handleDelite = () => this.props.onDeleteHeroe(this.props.id);

    handleInfo = () => {
        this.props.onInfoHeroe(this.props.id);
        // console.log(this.state.heroe);
        const { name, strength, intelligence, speed } = this.props;
      
        console.log(`Heroe: ${name}
        strength: ${strength}
        intelligence: ${intelligence}
        speed: ${speed}
        `);
    };

    handSum = () => {

    }

    render() {
        return(
            
            <div onClick={this.handleAdd}>
                <span>{name}</span>
                <div> 
                    <Button onClick={this.handleDelite} text="Delete" />
                    <Button onClick={this.handleInfo} text="Info" />
                </div>  
           </div> 
            // <Button text='Save Squard'/>
            // <Button text='Reset Squard'/>
        )}
}
