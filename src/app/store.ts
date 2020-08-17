import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import spreadSheetReducer from '../features/SpreadSheet/SpreadSheetSlice';

export const store = configureStore({
  reducer: {
    //counter : counterReducer,
    spreadSheet: spreadSheetReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
