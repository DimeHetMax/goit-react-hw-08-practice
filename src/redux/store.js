import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { authReducer } from "./auth/slice";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


// export const rootReducer = combineReducers({
//   contacts: contactReducer,
//   filter: filterReducer,
// })

// export const store = configureStore({reducer:rootReducer});

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);