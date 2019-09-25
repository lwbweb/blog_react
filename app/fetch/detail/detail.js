import {get
} from '../get'

export function getDeatilData(id) {
	const result = get('/api/detail/' + id)
	return result
}