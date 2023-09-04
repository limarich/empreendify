import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import CalculatorReducer from './Calculator/Calculator.reducer';
import FormsReducer from './Foms/Forms.reducer';

const rootReducer = combineReducers({
  calculator: CalculatorReducer,
  forms: FormsReducer
});

const persistedReducer = persistReducer({
  key: 'root',
  storage
}, rootReducer);

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);