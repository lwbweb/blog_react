import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home'
import HomeList from '../../../components/List/index'


class List extends React.Component {
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
                    ? <HomeList data={this.state.data}/>
                    : <div>{/* 加载中... */}</div>
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取首页数据
        this.loadIndexPageData()
    }
    // 获取首页数据
    loadIndexPageData() {
        const result = getListData()
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                data: json.data
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('首页列表出错, ', ex.message)
            }
        })
    }
 
}

export default List