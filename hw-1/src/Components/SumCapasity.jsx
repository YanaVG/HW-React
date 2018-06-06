/* eslint-disable*/
import React, { Component} from 'react';
import PropTypes from 'prop-types';


export default class SumCapacity extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        strength: PropTypes.number,
        intelligence: PropTypes.number,
        speed: PropTypes.number,
        // onGetSquadsHeroes: PropTypes.func.isRequired,
        // onDeleteHeroe: PropTypes.func.isRequired,
        // onInfoHeroe: PropTypes.func.isRequired,
        
    };

    static defaultProps = {
        strength: 0,
        intelligence: 0,
        speed: 0,
    };
    render(){
        return(
            <div>
                <p>strength:</p>
                <p>intelegence:</p>
                <p>speed:</p>
            </div>
    )
}
}