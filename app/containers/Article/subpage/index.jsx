import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import { getArticleData } from '../../../fetch/article/article'
import List from '../../../components/List/index'
import { Pagination } from 'antd'

class ArticleList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            total: 0,
            page: 1
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.data.length
                    ? <List data={this.state.data}/>
                    : <div>{/* 加载中... */}</div>
                }
                <Pagination defaultCurrent={1} total={this.state.total} defaultPageSize={10}
                onChange={this.changeClick.bind(this)}/>
            </div>
        )
    }

    componentDidMount() {
        // 获取首页数据
        this.loadArticleData()
    }


    // 获取首页数据
    loadArticleData() {
        const result = getArticleData(this.state.page)
        this.resultHandle(result)
    }

    // 加载更多数据
    changeClick(page) {
        this.setState({
            page:page
        },()=>{
            const result = getArticleData(this.state.page);
            this.resultHandle(result)
        })  
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
 
}

export default ArticleList