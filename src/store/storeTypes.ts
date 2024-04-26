// Infer the `RootState` and `AppDispatch` types from the store itself
import {store} from "@/store/configureStore";

export type RootState = ReturnType<typeof store.getState>;

// Inferred type from reducers
export type AppDispatch = typeof store.dispatch;
