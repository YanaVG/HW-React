/* eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './shared/Button/Button';



export default class SavedSquads extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        savedSquads: PropTypes.string.isRequired,
        onDeleteSquad: PropTypes.func.isRequired,
    };

    // state = {
    //     savedSquads: '',
    // }
    handleDelite = () => this.props.onDeleteSquad(this.props.id);


render() {
    return(
        <Button text="Delete" onClick={handleDelite}/>
    )
}

}