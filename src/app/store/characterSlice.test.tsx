import { mockCharacter } from '../../utils/mocks';
import {
  characterActions,
  charactersReducer,
  getAllCharacters,
  getLastAddedId,
} from './characterSlice';

describe('characterSlice', () => {
  describe('actions', () => {
    test('should return the initial state', () => {
      const state = charactersReducer(undefined, { type: '' });
      expect(state).toEqual({
        data: [],
        lastAddedId: null,
      });
    });
    test('should handle addCharacter action', () => {
      const state = charactersReducer(
        undefined,
        characterActions.addCharacter(mockCharacter)
      );

      expect(state.data[0]).toEqual(mockCharacter);
      expect(state.lastAddedId).toBe('123');
    });
  });

  describe('selectors', () => {
    const state = {
      characters: {
        data: [mockCharacter],
        lastAddedId: '123',
      },
    };
    test('should handle getAllCharacters and return array ', () => {
      expect(getAllCharacters(state)).toEqual([mockCharacter]);
    });
    test('should handle getLastAddedId and return id of last added', () => {
      expect(getLastAddedId(state)).toBe('123');
    });
  });
});
