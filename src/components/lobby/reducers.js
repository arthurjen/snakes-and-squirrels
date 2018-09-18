// import { GAME_END } from '../game/reducers';

export const GAMES_LOAD = 'GAMES_LOAD';
export const STATS_LOAD = 'STATS_LOAD';
export const LEADERS_LOAD = 'LEADERS_LOAD';
export const CHAT_LOAD = 'CHAT_LOAD';

export const getGames = state => state.games;
export const getStats = state => state.stats;
export const getLeaders = state => state.leaders;
export const getChatroom = state => state.chatroom;

export function games(state = '', { type, payload }) {
  switch(type) {
    case GAMES_LOAD:
      return payload;
    // case GAME_END:
    //   return '';
    default:
      return state;
  }
}

export function stats(state = {}, { type, payload }) {
  switch(type) {
    case STATS_LOAD:
      return payload;
    default:
      return state;
  }
}

export function leaders(state = [], { type, payload }) {
  switch(type) {
    case LEADERS_LOAD:
      return payload;
    default:
      return state;
  }
}

export function chatroom(state = [], { type, payload }) {
  switch(type) {
    case CHAT_LOAD:
      return payload;
    default:
      return state;
  }
}