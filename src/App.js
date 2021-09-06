import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Ecommerce from './cartPOC/Ecommerce';
import EcommerceStore  from './cartPOC/app/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={EcommerceStore}>
      <Ecommerce></Ecommerce>
    </Provider>
  );
}

export default App;
