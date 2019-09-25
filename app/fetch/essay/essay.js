import {get
} from '../get'

export function getEssayData(page) {
	const result = get('/api/essaylist/' + page)
	return result
}