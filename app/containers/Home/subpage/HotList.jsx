import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HotListItem from '../../../components/HotList/index'
import { getHotListData } from '../../../fetch/HotList/HotList'


class HotList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.data.length
                    ? <HotListItem data={this.state.data}/>
                    : <div>{/* 加载中... */}</div>
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取首页数据
        this.loadPageData()
    }
    // 获取推荐列表
    loadPageData() {
        const result = getHotListData()
        // 处理数据
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                data: json.data
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('出错, ', ex.message)
            }
        })
    }
}

export default HotList