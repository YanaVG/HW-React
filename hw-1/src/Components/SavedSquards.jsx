/* eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './shared/Button/Button';



export default class SavedSquards extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        // name: PropTypes.string.isRequired,
        onDeleteSquard: PropTypes.func.isRequired,
    };

    state = {
        savedSquards: '',
    }
    handleDelite = () => this.props.onDeleteSquard(this.props.id);


render() {
    return(
        <Button text=""/>
    )
}

}