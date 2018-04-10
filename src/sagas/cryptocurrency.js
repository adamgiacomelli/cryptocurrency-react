import { call, put, takeEvery} from 'redux-saga/effects';
import {fetchCryptoCurrencys, fetchUpdateCryptoCurrencys, fetchSingleCryptocurrency} from '../api/cryptocurrency';
import {
    LOAD_LIST_OF_CRYPTOCURRENCYS_ERROR,
    LOAD_LIST_OF_CRYPTOCURRENCYS_REQUEST,
    LOAD_LIST_OF_CRYPTOCURRENCYS_SUCCESS,
    UPDATE_LIST_OF_CRYPTOCURRENCYS_ERROR,
    UPDATE_LIST_OF_CRYPTOCURRENCYS_SUCCESS,
    UPDATE_LIST_OF_CRYPTOCURRENCYS_REQUEST, UPDATE_CURRENCY_REQUEST, UPDATE_CURRENCY_SUCCESS, UPDATE_CURRENCY_ERROR,
    REFRESH_CRYPTOCURRENCY_REQUEST, REFRESH_CRYPTOCURRENCY_SUCCESS, REFRESH_CRYPTOCURRENCY_ERROR,
} from "../constants/index";

function* loadCryptocurrencyList(action) {
    try {
        const currency = action.currency;
        const cryptocurrency = yield call(fetchCryptoCurrencys, currency);
        yield put({ type: LOAD_LIST_OF_CRYPTOCURRENCYS_SUCCESS, cryptocurrency });
    } catch (e) {
        yield put({ type: LOAD_LIST_OF_CRYPTOCURRENCYS_ERROR });
    }
}


function* updateCryptocurrencyList(action) {
    try {
        const currency = action.currency;
        const cryptocurrency = yield call(fetchUpdateCryptoCurrencys, currency);
        yield put({ type: UPDATE_LIST_OF_CRYPTOCURRENCYS_SUCCESS, cryptocurrency });
    } catch (e) {
        yield put({ type: UPDATE_LIST_OF_CRYPTOCURRENCYS_ERROR });
    }
}

function* updateCurrency(action) {
    try {
        const currency = action.currency;
        yield put({ type: UPDATE_CURRENCY_SUCCESS, currency });
        const cryptocurrency = yield call(fetchUpdateCryptoCurrencys, currency );
        yield put({ type: UPDATE_LIST_OF_CRYPTOCURRENCYS_SUCCESS, cryptocurrency });
    } catch (e) {
        yield put({ type: UPDATE_CURRENCY_ERROR });
    }
}


function* refreshCryptocurrency(action) {
    try {
        const currency = action.currency;
        const id = action.id;
        const cryptocurrency = yield call(fetchSingleCryptocurrency, id, currency );
        yield put({ type: REFRESH_CRYPTOCURRENCY_SUCCESS, cryptocurrency });
    } catch (e) {
        yield put({ type: REFRESH_CRYPTOCURRENCY_ERROR });
    }
}


export default function* loadCryptoCurrencySaga() {
    yield [
        takeEvery(LOAD_LIST_OF_CRYPTOCURRENCYS_REQUEST, loadCryptocurrencyList),
        takeEvery(UPDATE_LIST_OF_CRYPTOCURRENCYS_REQUEST, updateCryptocurrencyList),
        takeEvery(UPDATE_CURRENCY_REQUEST, updateCurrency),
        takeEvery(REFRESH_CRYPTOCURRENCY_REQUEST, refreshCryptocurrency),

    ];
}