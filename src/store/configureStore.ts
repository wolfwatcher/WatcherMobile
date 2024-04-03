import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from "@/store/reducers";
import {configureStore} from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

if (module.hot) {
    module.hot.accept(() => {
        store.replaceReducer(
            persistReducer(persistConfig, persistedReducer)
        )
    })
}

export const persistor = persistStore(store);
