import * as actionTypes from '../constants/usernav'

const initialState = {}

export default function usernav(state = initialState, action) {
	switch (action.type) {
		case actionTypes.USERNAV_UPDATE:
			return action.data
		default:
			return state
	}
}