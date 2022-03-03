import * as types from './shopping-types';

const INIT_STATE = {
    product: [
        {id: 1, name: 'Iphone', price: 1000, qty:1, image: './images/iphone.jpg'},
        {id: 2, name: 'SamSung', price: 1500, qty:1, image: './images/samsung.jpg'},
        {id: 3, name: 'Oppo', price: 2000, qty:1, image: './images/oppo.jpg'}
    ],
    order: {},
    quantity: 0
}

function calculator(obj) {
    let quantity =0;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            quantity+=parseInt(obj[key].qty)
        }
    }
    return quantity;
}

const shopReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            
            if(!state.order.hasOwnProperty(action.payload.item.id)){
                state.order[action.payload.item.id] = action.payload.item;
            }else{
                state.order[action.payload.item.id].qty=state.order[action.payload.item.id].qty+1
            }

            return {
                ...state,
                quantity: calculator(state.order),
                order:  state.order
            }
          
        case types.REMOVE_ITEM: 
            if (state.order.hasOwnProperty(action.payload.item)) {
                delete state.order[action.payload.item];
            }
            
            return {
                ...state,
                quantity: calculator(state.order),
                order: {...state.order}
            }
        
        case types.SET_QUANTITY:
            if (state.order.hasOwnProperty(action.payload.item)) {
                state.order[action.payload.item].qty=action.payload.value
            }

            return {
                ...state,
                quantity: calculator(state.order),
                order: {...state.order}
            }
        default:
            break;
    }
    return state;
}

export default shopReducer;