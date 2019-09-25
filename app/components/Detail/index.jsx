import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div className="detail-container">
                <h1 className="title">{data.title}</h1>
                <p className="time">发布时间：{data.time}</p>
                <div className="content" dangerouslySetInnerHTML={{__html: data.content}}>
                </div>
                <p className="visitor">浏览量：{data.watch}</p>
            </div>
        )
    }
}

export default DetailInfo