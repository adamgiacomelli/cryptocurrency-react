import React from 'react';
import {
    loadListOfCryptocurrencys,
    updateListOfCryptocurrencys,
    updateCurrency,
    refreshSingleCryptocurrency
} from '../../actions/cryptocurrency';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CryptocurrencyItem from '../CryptocurrencyItem/CryptocurrencyItem';
import CryptocurrencyDetails from '../CryptocurrencyDetails/CryptocurrencyDetails';
import Modal from '../Modal/Modal';

class Cryptocurrency extends React.Component {
    static propTypes = {
        cryptocurrency: PropTypes.shape({}),
        currency: PropTypes.string.isRequired,
    };

    static defaultProps = {
        cryptocurrency: null,
        currency: 'eur'
    };

    constructor(props) {
        super(props);

        this.updateList = this.updateList.bind(this);
        this.updateCurrency = this.updateCurrency.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isOpen: false,
            item: null,
        };
    }

    toggleModal(item) {
        this.props.refreshCryptocurrency(item.id, this.props.cryptocurrency.currency);
        this.setState({
            isOpen: !this.state.isOpen,
            item,
        });
    }

    componentWillMount() {
        this.props.updateCurrencyProp(this.props.currency);
        this.props.loadCryptocurrencyList(this.props.currency);
    }

    updateList() {
        this.props.updateCryptocurrencyList(this.props.cryptocurrency.currency);
    }

    updateCurrency(currency) {
        this.props.updateCurrencyProp(currency);
    }


    render() {
        let cryptocurrency = this.props.cryptocurrency;
        const divStyle = {
            backgroundColor: '#ffe6ff',
        };
        return (
            <div>
                <div>
                    <button onClick={() => {
                        this.updateCurrency('usd')
                    }}>USD
                    </button>
                    <button onClick={() => {
                        this.updateCurrency('eur')
                    }}>EUR
                    </button>
                    <button onClick={() => {
                        this.updateCurrency('cny')
                    }}>CNY
                    </button>
                </div>
                <div> Current: {this.props.cryptocurrency.currency}</div>
                <br/>
                <br/>
                <br/>
                <button onClick={this.updateList}>Reload list</button>
                <Modal show={this.state.isOpen}
                       onClose={this.toggleModal}>
                    <CryptocurrencyDetails
                        key={this.state.item ? this.state.item.id: '1'}
                        id={this.state.item ? this.state.item.id: '1'}
                        rank={this.state.item ? this.state.item.rank: ''}
                        symbol={this.state.item ? this.state.item.symbol : ''}
                        price={this.state.item ? this.state.item[`price_${cryptocurrency.currency}`] : ''}
                        price_bitcoin={this.state.item ? this.state.item.price_btc: ''}
                        percent_change_1h={this.state.item ? this.state.item.percent_change_1h: ''}
                        percent_change_24h={this.state.item ? this.state.item.percent_change_24h: ''}
                        percent_change_7d={this.state.item ? this.state.item.percent_change_7d: ''}
                />
            </Modal>
    {cryptocurrency.cryptocurrency && cryptocurrency.cryptocurrency.slice(0, 100).map(item => (
        <div style={divStyle} onClick={() => {
            this.toggleModal(item)
        }} key={item? item.id: '1'}>
            <CryptocurrencyItem
                key={item.id}
                rank={item.rank}
                symbol={item.symbol}
                price={item[`price_${cryptocurrency.currency}`]}
                hour_change={item.percent_change_24h}
            />
        </div>
    ))}

    </div>
    )
        ;
    }
}

const mapStateToProps = (state) => {
    return {
        cryptocurrency: state.cryptocurrency ? state.cryptocurrency : {},
    };
};

function mapDispatchToProps(dispatch) {
    return {
        loadCryptocurrencyList: bindActionCreators(loadListOfCryptocurrencys, dispatch),
        updateCryptocurrencyList: bindActionCreators(updateListOfCryptocurrencys, dispatch),
        updateCurrencyProp: bindActionCreators(updateCurrency, dispatch),
        refreshCryptocurrency: bindActionCreators(refreshSingleCryptocurrency, dispatch),
    };
}


export default (connect(mapStateToProps, mapDispatchToProps)(Cryptocurrency));
