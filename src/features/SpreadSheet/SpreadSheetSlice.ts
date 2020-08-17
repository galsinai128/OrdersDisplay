import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { getData, setDataApi } from '../../api';

interface spreadSheetState {
  value: number;
  data: object;
}

const initialState: spreadSheetState = {
  value: 0,
  data: {}
};

export const spreadSheetSlice = createSlice({
  name: 'spreadSheet',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<object>) => {
      state.data = action.payload;
    },
    setItem: (state, action: PayloadAction<object>) => {
      state.data = action.payload;

    }
  },
});

export const { setData, setItem } = spreadSheetSlice.actions;


export const getSpreadSheetData = (): AppThunk => dispatch => {
    let data = getData();
    dispatch(setData(data))
  };

export const setSpreadSheetItem = (sectionItem:any): AppThunk => dispatch => {
  let data = JSON.parse(JSON.stringify(getData()));;
  data.sections.map((section: any) => {
    for (let i in section.data){
      if (section.data[i].name === sectionItem.name) {
        section.data[i].value = sectionItem.value;
      } 
    }
  })
  setDataApi(data) //should be async if api call is realy implemented
  dispatch(setItem(data))
};

export const selectData = (state: RootState) => state.spreadSheet.data;


export default spreadSheetSlice.reducer;
