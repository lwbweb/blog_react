import {get
} from '../get'

export function getListData() {
	const result = get('/api/homelist')
	return result
}