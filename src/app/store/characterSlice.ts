import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TUserData } from '../../utils/types';

const sliceName = 'characterSlice';

interface InitialState {
  data: TUserData[];
  lastAddedId: string | null;
}
const initialState: InitialState = {
  data: [],
  lastAddedId: null,
};

const charactersSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<TUserData>) => {
      state.data.push(action.payload);
      state.lastAddedId = action.payload.id;
    },
  },
});

export const charactersReducer = charactersSlice.reducer;
export const characterActions = charactersSlice.actions;

export const getAllCharacters = (state: { characters: InitialState }) =>
  state.characters.data;

export const getLastAddedId = (state: { characters: InitialState }) =>
  state.characters.lastAddedId;
