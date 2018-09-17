import { get, post } from './request';

const URL = '/api';
const AUTH_URL = `${URL}/auth`;
const RECORD_URL = `${URL}/records`;
const SIGNUP_URL = `${AUTH_URL}/signup`;
const SIGNIN_URL = `${AUTH_URL}/signin`;

export const signup = credentials => post(SIGNUP_URL, credentials);
export const signin = credentials => post(SIGNIN_URL, credentials);

export const postRecord = game => {
  delete game.key;
  const players = Object.keys(game).filter(key => key !== 'winner');
  const data = {
    players,
    game
  };
  post(RECORD_URL, data);
};

export const verifyUser = token => {
  return get(`${AUTH_URL}/verify`, {
    headers: {
      Authorization: token
    }
  });
};

export const getLeaderboard = () => get(`${RECORD_URL}/ranks/leaderboard`);

export const getStatsById = id => get(`${RECORD_URL}/stats/${id}`);  