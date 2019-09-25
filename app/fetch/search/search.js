import {get
} from '../get'

export function getSearchData(page, category, keyword) {
	const keywordStr = keyword ? '/' + keyword : ''
	const result = get('/api/search/' + page + '/' + category + keywordStr)
	return result
}