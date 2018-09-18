export const GAME_START = 'GAME_START';
export const GAME_END = 'GAME_END';
export const HAND_START = 'HAND_START';
export const CARD_PLAY = 'CARD_PLAY';

export const getGame = state => state.game;
export const getHand = state => state.hand;

export function game(state = {}, { type, payload }) {
  switch(type) {
    case GAME_START:
      return payload;
    case GAME_END:
      return null;
    default:
      return state;
  }
}

export function hand(state = [], { type, payload }) {
  switch(type) {
    case HAND_START:
      return payload;
    case CARD_PLAY:
      return state.filter(card => card.order === 0);
    default:
      return state;
  }
}

