import { combineReducers } from 'redux';
import gamesReduser from './gamesReduser';

const rootReducer = combineReducers({
    games: gamesReduser,
});

export default rootReducer;