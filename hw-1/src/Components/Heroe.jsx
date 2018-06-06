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
        onDeleteHeroe: PropTypes.func.isRequired,
        onInfoHeroe: PropTypes.func.isRequired,
        onAddHeroe: PropTypes.func.isRequired,
    };

    static defaultProps = {
        id: '',
        name: '',
        strength: 0,
        intelligence: 0,
        speed: 0,
    }

    handleDelite = () => {
        this.props.onDeleteHeroe(this.props.id);
    }

    handleAdd = () => this.props.onAddHeroe(this.props.id);

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

    render() {
        const { name } = this.props;
        return(
           <div>
                <span>{name}</span>
                <div> 
                    <Button onClick={this.handleAdd} text="Add" />
                    <Button onClick={this.handleDelite} text="Delete" />
                    <Button onClick={this.handleInfo} text="Info" />
                </div>
                
           </div> 

        );
    }
}



