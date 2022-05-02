// create store here
import { combineReducers, legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

const rootReducer = combineReducers({ data: reducer });

// create store here
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}