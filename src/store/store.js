import { createStore, combineReducers } from 'redux';

import CalculatorReducer from './Calculator/Calculator.reducer';
import FormsReducer from './Foms/Forms.reducer';

const rootReducer = combineReducers({
  calculator: CalculatorReducer,
  forms: FormsReducer
});

export const store = createStore(rootReducer);