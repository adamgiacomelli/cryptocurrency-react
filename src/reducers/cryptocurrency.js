import dotProp from 'dot-prop-immutable';
import {
    LOAD_LIST_OF_CRYPTOCURRENCYS_SUCCESS,
    UPDATE_LIST_OF_CRYPTOCURRENCYS_SUCCESS,
    UPDATE_CURRENCY_SUCCESS, REFRESH_CRYPTOCURRENCY_SUCCESS
} from '../constants/index';

export default function cryptocurrency(state = null, action) {
    if (state === null) {
        return {};
    }

    switch (action.type) {
        case UPDATE_LIST_OF_CRYPTOCURRENCYS_SUCCESS: {
            const data = action.cryptocurrency;

            state = dotProp.set(state, `cryptocurrency`, data);
            return state;
        }

        case LOAD_LIST_OF_CRYPTOCURRENCYS_SUCCESS: {
            const data = action.cryptocurrency;
            state = dotProp.set(state, `cryptocurrency`, data);
            return state;
        }

        case UPDATE_CURRENCY_SUCCESS: {
            const data = action.currency;
            state = dotProp.set(state, `currency`, data);
            return state;
        }

        case REFRESH_CRYPTOCURRENCY_SUCCESS: {
            const data = action.cryptocurrency;
            state = dotProp.set(state, `single`, data);
            return state;
        }

        default: {
            return state;
        }
    }
}
