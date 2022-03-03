import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage,
  }


const pReducer = persistReducer(persistConfig, rootReducer);


let store = createStore(pReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);
export const persistor = persistStore(store);

export default store;



// export let persistor = persistStore(store);
