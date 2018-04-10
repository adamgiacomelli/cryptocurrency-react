import React from 'react';
import {
    loadListOfCryptocurrencys,
    updateListOfCryptocurrencys,
    updateCurrency
} from './actions/cryptocurrency';
import {
    LOAD_LIST_OF_CRYPTOCURRENCYS_REQUEST,
    UPDATE_LIST_OF_CRYPTOCURRENCYS_REQUEST,
    UPDATE_CURRENCY_REQUEST,
    UPDATE_LIST_OF_CRYPTOCURRENCYS_SUCCESS,
    UPDATE_CURRENCY_SUCCESS, LOAD_LIST_OF_CRYPTOCURRENCYS_SUCCESS
} from './constants/index';
import expect from 'expect';
import { render } from 'react-dom';
import cryptocurrency from './reducers/cryptocurrency';

it('should return cryptocurrency list', () => {
    expect(loadListOfCryptocurrencys('usd')).toEqual({
        type: LOAD_LIST_OF_CRYPTOCURRENCYS_REQUEST,
        currency: 'usd',
    });
});

it('should return updated list', () => {
    expect(updateListOfCryptocurrencys('usd')).toEqual({
        type: UPDATE_LIST_OF_CRYPTOCURRENCYS_REQUEST,
        currency: 'usd',
    });
});

it('should return currency', () => {
    expect(updateCurrency('usd')).toEqual({
        type: UPDATE_CURRENCY_REQUEST,
        currency: 'usd',
    });
});

 it('returns the initial state', () => {
     let x= {};
    expect(cryptocurrency(undefined, {})).toEqual(x);
  });

 it('returns the updated currency', () => {
     let action= {type: UPDATE_CURRENCY_SUCCESS,
     currency: 'usd'};
     let state= {};
    expect(cryptocurrency(state, action)).toEqual({currency: 'usd'});
  });

 it('returns the updated list od cryptocurrencys', () => {
     let action= {type: UPDATE_LIST_OF_CRYPTOCURRENCYS_SUCCESS,
     cryptocurrency: 1};
     let state= {};
    expect(cryptocurrency(state, action)).toEqual({cryptocurrency: 1});
  });

 it('returns the list od cryptocurrencys', () => {
     let action= {type: LOAD_LIST_OF_CRYPTOCURRENCYS_SUCCESS,
     cryptocurrency: 1};
     let state= {};
    expect(cryptocurrency(state, action)).toEqual({cryptocurrency: 1});
  });
