import React from 'react';
import PropTypes from 'prop-types';
import { refreshSingleCryptocurrency } from "../../actions/cryptocurrency";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CryptocurrencyDetails extends React.Component {
    static propTypes = {
        single: PropTypes.object,
        currency: PropTypes.string,
    };
    constructor(props) {
        super(props);
        this.updateCryptocurrency = this.updateCryptocurrency.bind(this);
    }

    updateCryptocurrency() {
        this.props.refreshCryptocurrency(this.props.id, this.props.cryptocurrency.currency);
    }

    render() {
     return (
            <div>
                <h5>Rank: {this.props.single ? this.props.single.rank : ''} <br/></h5>
                <h5>Symbol: {this.props.single ? this.props.single.symbol : ''}<br/></h5>
                <h5>Price: {this.props.single ? this.props.single[`price_${this.props.currency}`] : ''}<br/></h5>
                <h5>Price bitcoin: {this.props.single ? this.props.single.price_btc : ''}<br/></h5>
                <h5>1 hour change: {this.props.single ? this.props.single.percent_change_1h : ''}<br/> <br/><br/></h5>
                <h5>24 hour change: {this.props.single ? this.props.single.percent_change_24h : ''}<br/> <br/><br/></h5>
                <h5>7 days change: {this.props.single ? this.props.single.percent_change_7d : ''}<br/> <br/><br/></h5>
                <button onClick={() => this.updateCryptocurrency()}>
                    Refresh
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cryptocurrency: state.cryptocurrency ? state.cryptocurrency : {},
        single: state.cryptocurrency.single ? state.cryptocurrency.single[0] : {},
        currency: state.cryptocurrency.currency ? state.cryptocurrency.currency : 'usd',
    };
};

function mapDispatchToProps(dispatch) {
    return {
        refreshCryptocurrency: bindActionCreators(refreshSingleCryptocurrency, dispatch),
    };
}

export default (connect(mapStateToProps, mapDispatchToProps)(CryptocurrencyDetails));
