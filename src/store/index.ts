import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import createSagaMidlleWate from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducers";
import mainSaga from "./sagas/index"

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['countReducer']
};

const persistedReducer = persistReducer(persistConfig, reducer);
const SagaMidlleWare = createSagaMidlleWate();

const store = createStore(persistedReducer, applyMiddleware(reduxThunk, reduxPromise, SagaMidlleWare));

SagaMidlleWare.run(mainSaga);

let persistor = persistStore(store);

export { store, persistor };