import { createStore, combineReducers } from 'redux';
import CalculatorReducer from './Calculator/Calculator.reducer';
import FormsReducer from './Foms/Forms.reducer';

const rootReducer = combineReducers({
  calculator: CalculatorReducer,
  forms: FormsReducer
});

const store = createStore(rootReducer);

export default store;