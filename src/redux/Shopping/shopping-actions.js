import * as types from './shopping-types';

export const addToCart = (item) => {
    return {
        type: types.ADD_TO_CART,
        payload: {
            item : item
        },
    };
};

export const removeCart = (item) => {
    return {
        type: types.REMOVE_ITEM,
        payload: {
            item
        },
    };
};
