import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TUserData } from '../../utils/types';

const sliceName = 'characterSlice';

interface InitialState {
  data: TUserData[];
}
const initialState: InitialState = {
  data: [],
};

const charactersSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<TUserData>) => {
      state.data.push(action.payload);
    },
  },
});

export const charactersReducer = charactersSlice.reducer;
export const characterActions = charactersSlice.actions;

export const getAllCharacters = (state: { characters: InitialState }) =>
  state.characters.data;
