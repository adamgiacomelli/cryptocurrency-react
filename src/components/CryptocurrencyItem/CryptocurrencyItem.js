import React from 'react';
import PropTypes from 'prop-types';

class CryptocurrencyItem extends React.Component {

    static propTypes = {
        rank: PropTypes.string.isRequired,
        symbol: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        hour_change: PropTypes.string.isRequired,
    };
    static defaultProps = {
        rank: '',
        symbol: '',
        price: '',
        hour_change: '',
    };

    render() {
        const {rank, symbol, price, hour_change} = this.props;
        return (
            <div>
               <h5>Rank: {rank} <br/> </h5>
               <h5>Symbol: {symbol}<br/> </h5>
               <h5>Price: {price}<br/> </h5>
               <h5>24 hour: {hour_change}<br/> <br/><br/></h5>
            </div>
        );
    }
}

export default (CryptocurrencyItem);
