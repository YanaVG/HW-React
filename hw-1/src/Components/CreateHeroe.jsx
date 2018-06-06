import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Button from './shared/Button/Button';
import Input from './shared/Input';
import ChooseCapacity from './ChooseCapacity';
import styles from './HeroesStyle.css';

const INITIAL_STATE = {
    name: '',
};

export default class CreateHeroe extends Component {
    static propTypes = {
        onFormSubmit: PropTypes.func.isRequired,
    };

    constructor(props, state){
        super(props, state)

        this.state = { 
            ...INITIAL_STATE,
            fields: {
                intelligence: 0,
                speed: 0,
                strength: 0,
            }
        };
    }

    onInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
    
        this.setState({ 
            fields:{
                ...this.state.fields,
                [name]: value, 
            }
        });
    };

    handleHeroInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
    
        this.setState({ 
            [name]: value,
            fields:{
                ...this.state.fields,
                [name]: value, 
            } 
    
        });
        // console.log(name, value,)
    };

    handleSubmit = e => {
        e.preventDefault();
    
        if (this.state.text === '') {
          return;
        }
        this.props.onFormSubmit(this.state.fields);
        

        this.setState({ ...INITIAL_STATE });
    };

    render() {
        const { name, 
            fields: 
            { 
                intelligence,
                speed,
                strength 
            } 
        } = this.state;

        return(
             <form onSubmit={this.handleSubmit} className={styles.form} >
                <Input 
                    name="name"
                    value={name}
                    placeholder="Enter heroe name..."
                    onChange={this.handleHeroInputChange}
                    className={styles.input }
                />
                <ChooseCapacity onInputChange={this.onInputChange} inputName='strength' value={strength}/>
                <ChooseCapacity onInputChange={this.onInputChange} inputName='intelligence' value={intelligence}/>
                <ChooseCapacity onInputChange={this.onInputChange} inputName='speed' value={speed}/>
                <Button type="submit" text="Add Heroe" />
            </form>
        );
    }
}