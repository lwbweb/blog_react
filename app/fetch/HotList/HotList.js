import {get
} from '../get'

export function getHotListData() {
	const result = get('/api/hotlist')
	return result
}