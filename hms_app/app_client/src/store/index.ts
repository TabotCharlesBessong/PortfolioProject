// store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import userReducer from "./slice/UserSlice";

// Persist configuration type
import { PersistConfig } from "redux-persist";

// Define the structure of your persisted state (you can rename this type to avoid conflicts)
interface PersistedState {
  user: ReturnType<typeof userReducer>;
}

// Set up the persist configuration for TypeScript
const persistConfig: PersistConfig<PersistedState> = {
  key: "root",
  storage,
  version: 1,
};

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
