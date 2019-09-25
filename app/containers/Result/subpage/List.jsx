import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ListCompoent from '../../../components/List'
import { getSearchData } from '../../../fetch/search/search'
import { Pagination } from 'antd'

// 初始化一个组件的 state
const initialState = {
    total: 0,
    data: [],
    page: 1
}

class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initialState
    }
    render() {
        return (
            <div>
                {
                    this.state.data.length
                    ? <ListCompoent data={this.state.data}/>
                    : <div>{/* 加载中... */}</div>
                }
                <Pagination defaultCurrent={1} total={this.state.total} defaultPageSize={10}
                onChange={this.changeClick.bind(this)}/>
            </div>
        )
    }
 
    changeClick(page) {
        this.setState({
            page:page
        },()=>{
            const result = getSearchData(this.state.page);
            this.resultHandle(result)
        })  
    }

    componentDidMount() {
        // 获取首页数据
        this.loadPageData()
    }

    // 获取首页数据
    loadPageData() {
        const page = this.state.page
        const keyword = this.props.keyword || ''
        const category = this.props.category
        const result = getSearchData(page, category, keyword)
        this.resultHandle(result)
    }

    // 处理数据
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const total = json.total
            const data = json.data

            this.setState({
                total: total,
                data: data
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('首页”文章列表“获取数据报错, ', ex.message)
            }
        })
    }

    // 处理重新搜索
    componentDidUpdate(prevProps, prevState) {
        const keyword = this.props.keyword
        const category = this.props.category

        // 搜索条件完全相等时，忽略。重要！！！
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return
        }

        // 重置 state
        this.setState(initialState)

        // 重新加载数据
        this.loadPageData()
    }
}

export default SearchList