import {
    LOAD_LIST_OF_CRYPTOCURRENCYS_REQUEST, UPDATE_CURRENCY_REQUEST,
    UPDATE_LIST_OF_CRYPTOCURRENCYS_REQUEST,
    REFRESH_CRYPTOCURRENCY_REQUEST,
} from '../constants/index'

export function loadListOfCryptocurrencys(currency) {
    return {
        type: LOAD_LIST_OF_CRYPTOCURRENCYS_REQUEST,
        currency,
    };
}

export function updateListOfCryptocurrencys(currency) {
    return {
        type: UPDATE_LIST_OF_CRYPTOCURRENCYS_REQUEST,
        currency,
    };
}

export function updateCurrency(currency) {
    return {
        type: UPDATE_CURRENCY_REQUEST,
        currency,
    };
}
export function refreshSingleCryptocurrency(id,currency) {
    return {
        type: REFRESH_CRYPTOCURRENCY_REQUEST,
        id,
        currency,
    };
}