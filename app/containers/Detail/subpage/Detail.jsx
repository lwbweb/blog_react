import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getDeatilData } from '../../../fetch/detail/detail'
import DetailInfo from '../../../components/Detail/index'
import './style.less'

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: false
        }
    }
    render() {
        return (
            this.state.data
            ? <DetailInfo data={this.state.data} />
            : <div>请求失败</div>
        )
    }
    componentDidMount() {
        this.loadDetailData();
    }
    // 获取首页数据
    loadDetailData() {
        const id = this.props.id
        const result = getDeatilData(id)
        this.resultHandle(result)
    }
    // 处理数据
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                data: json
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('详情页出错, ', ex.message)
            }
        })
    }
}

export default Info