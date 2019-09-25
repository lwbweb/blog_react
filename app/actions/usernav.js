import * as actionTypes from '../constants/usernav'

export function update(data) {
	return {
		type: actionTypes.USERNAV_UPDATE,
		data
	}
}