/*
 * Created by dkel on 2018-06-09.
 */
import {INCREMENT, DECREMENT, SET_DIFF, SET_MENU} from '../actions';
import {combineReducers} from 'Redux';

const counterInitialState = {
	value: 0,
	diff: 1,
	menuName: 'Cleanings'
};

const counter = (state = counterInitialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return Object.assign({}, state, {
				value: state.value + state.diff,
			});
			break;
		case DECREMENT:
			return Object.assign({}, state, {
				value: state.value - state.diff,
			});
			break;
		case SET_DIFF:
			return Object.assign({}, state, {
				value: state.diff,
			});
			break;
		case SET_MENU:
			return Object.assign({}, state, {
				menuName: state.menuName,
			});
			break;
	}
};

const conterApp = combineReducers({
	a: counter,
});

export default conterApp;
