import {get
} from '../get'

export function getArticleData(page) {
	const result = get('/api/articlelist/' + page)
	return result
}