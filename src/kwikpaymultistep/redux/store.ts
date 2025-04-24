import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
// import { loadFormFromLocalStorage } from '../utils/localStorage';

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
  preloadedState: {
    // form: loadFormFromLocalStorage() || undefined,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
