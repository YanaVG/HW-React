import React from 'react';
import PropTypes from 'prop-types';

const SquadStats = ({ totalValue }) => (
    <div>
        <p>strength: {totalValue.strength}</p>
        <p>intelligence: {totalValue.intelligence}</p>
        <p>speed: {totalValue.speed}</p>
    </div>
);

SquadStats.propTypes = {
    totalValue: PropTypes.shape().isRequired
};

export default SquadStats;
