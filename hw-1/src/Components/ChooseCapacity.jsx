import React from 'react';
import * as T from 'prop-types';
import CapacityTitle from './CapacityTitle'; 
import styles from './HeroesStyle.css';

const makeOptions = num => {
    const elements = [];
  
    for (let i = 0; i <= num; i += 1) {
      elements.push(
        <option key={i} value={i}>
          {i}
        </option>,
        
      );
    }
    return elements;
  };
this.state = {
    inputName: 0,
};
const ChooseCapacity = ({inputName, onInputChange, value}) => (
    <div className={styles.form}>
        <CapacityTitle value={inputName} />
        <select
            name={inputName}
            value={ value }
            onChange={onInputChange}
        >
        {makeOptions(10)}
        </select>
    </div>
);

ChooseCapacity.propTypes = {
    inputName: T.string.isRequired,
    onInputChange: T.func.isRequired,
    value: T.number.isRequired
}

export default ChooseCapacity;