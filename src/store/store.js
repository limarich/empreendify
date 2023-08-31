import { createStore, combineReducers } from 'redux';
import CalculatorReducer from './Calculator/Calculator.reducer';

const rootReducer = combineReducers({
  CalculatorReducer
});

const store = createStore(rootReducer);

export default store;