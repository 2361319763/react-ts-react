import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducers";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['countReducer']
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(reduxThunk, reduxPromise));

let persistor = persistStore(store);

export { store, persistor };