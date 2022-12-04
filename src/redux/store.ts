import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import rootReducer from './Reducer/rootReducer';
import {name as appName} from '../../app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig: any = {
  key: 'root',
  blacklist: [],
  whitelist: ['auth'],
  keyPrefix: appName,
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: {trace: true, traceLimit: 30},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
