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

import { contactsReducer } from "./contactSlice";
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['contacts']
};

export const store = configureStore({
      reducer: {
        contact: persistReducer(contactsPersistConfig, contactsReducer),
      },
      middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    });

export const persistor = persistStore(store);