import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getEssayData } from '../../../fetch/essay/essay'
import List from '../../../components/List/index'
import { Pagination } from 'antd'

class EassyList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            total: 0,
            data: [],
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
        this.loadEssayData()
    }

    // 加载更多数据
    changeClick(page) {
        this.setState({
            page:page
        },()=>{
            const result = getEssayData(this.state.page);
            this.resultHandle(result)
        })  
    }

    // 获取首页数据
    loadEssayData() {
        const result = getEssayData(this.state.page)
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
                console.error('随笔列表出错, ', ex.message)
            }
        })
    }
 
}

export default EassyList