import React from 'react';
import { products, coupons } from '../data/data';

let initialState = {
    products,
    coupons,
    cart: [],
    cartItems: 0,
    mobile: 0,
    speaker: 0,
    book: 0,
    price: 0,
    state:0,
    discount:0
}

function ShoppingReducer(state = initialState, action) {
    let val = action.payload;
    if (!val) {
        val = Number.MAX_SAFE_INTEGER;
    }else if(val == 101){
        val = 0;
    }


    switch (action.type) {
        case "add_mobile":
            if (val == Number.MIN_SAFE_INTEGER) {
                // Delete product from cart
                let newCart = [];
                newCart = state.cart.filter(product => {
                    return product.title != 'Smartphone';
                })
                return {
                    ...state,
                    cartItems: state.cartItems - state.mobile,
                    price: state.price - state.mobile * state.products[0].price,
                    mobile: 0,
                    cart: [...newCart],
                }
            }
            val = val > state.mobile ? 1 : -1;

            if (val == -1 && state.mobile == 0) {
                // can't reduce count further
                return {
                    ...state
                };
            } else if (val == -1 && state.mobile == 1) {
                // just one product is left so delete the product
                let newCart = [];
                newCart = state.cart.filter(product => {
                    return product.title != 'Smartphone';
                })
                return {
                    ...state,
                    cartItems: state.cartItems + val,
                    price: state.price - state.products[0].price,
                    mobile: 0,
                    cart: [...newCart]
                }
            } else if (state.mobile != 0) {
                return {
                    ...state,
                    cartItems: state.cartItems + val,
                    mobile: state.mobile + val,
                    price: state.price + val*state.products[0].price,
                }
            }

            return {
                ...state,
                cartItems: state.cartItems + val,
                mobile: state.mobile + val,
                cart: [...state.cart, state.products[0]],
                price: state.price + val*state.products[0].price,
            }
        case "add_speaker":
            if (val == Number.MIN_SAFE_INTEGER) {
                let newCart = [];
                newCart = state.cart.filter(product => {
                    return product.title != 'Bluetooth Speaker';
                })
                return {
                    ...state,
                    cartItems: state.cartItems - state.speaker,
                    speaker: 0,
                    cart: [...newCart],
                    price: state.price - state.speaker * state.products[1].price,
                }
            }
            val = val > state.speaker ? 1 : -1;
            if (val == -1 && state.speaker == 0) {
                return state;
            } else if (val == -1 && state.speaker == 1) {
                let newCart = [];
                newCart = state.cart.filter(product => {
                    return product.title != 'Bluetooth Speaker';
                })
                return {
                    ...state,
                    cartItems: state.cartItems + val,
                    speaker: 0,
                    cart: [...newCart],
                    price: state.price - state.products[1].price,
                }
            } else if (state.speaker != 0) {
                return {
                    ...state,
                    cartItems: state.cartItems + val,
                    speaker: state.speaker + val,
                    price: state.price + val*state.products[1].price,
                }
            }

            return {
                ...state,
                cartItems: state.cartItems + val,
                speaker: state.speaker + val,
                cart: [...state.cart, state.products[1]],
                price: state.price + val*state.products[1].price,
            }
        case "add_book":
            if (val == Number.MIN_SAFE_INTEGER) {
                let newCart = [];
                newCart = state.cart.filter(product => {
                    return product.title != 'Book';
                })
                return {
                    ...state,
                    cartItems: state.cartItems - state.book,
                    book: 0,
                    cart: [...newCart],
                    price: state.price - state.book * state.products[2].price,
                }
            }
            val = val > state.book ? 1 : -1;
            if (val == -1 && state.book == 0) {
                return state;
            } else if (val == -1 && state.book == 1) {
                let newCart = [];
                newCart = state.cart.filter(product => {
                    return product.title != 'Book';
                })
                return {
                    ...state,
                    cartItems: state.cartItems + val,
                    book: 0,
                    cart: [...newCart],
                    price: state.price - state.products[1].price,
                }
            } else if (state.book != 0) {
                return {
                    ...state,
                    cartItems: state.cartItems + val,
                    book: state.book + val,
                    price: state.price + val*state.products[2].price,
                }
            }

            return {
                ...state,
                cartItems: state.cartItems + val,
                book: state.book + val,
                cart: [...state.cart, state.products[2]],
                price: state.price + val*state.products[2].price,
            }

        case 'add_discount': {
            return {
                ...state,
                discount:val,
            }
        }
        default: return state;
    }
}

export default ShoppingReducer;
