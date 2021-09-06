import {createStore} from 'redux';
import ShoppingReducer from '../cartRedux/ShoppingReducer';
const EcommerceStore  = createStore(ShoppingReducer);
export default EcommerceStore ;
