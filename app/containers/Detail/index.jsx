import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import DetailInfo from './subpage/Detail'


class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // 获取新闻ID
        const id = this.props.params.id

        return (
            <DetailInfo id={id}/>
        )
    }
}
 
export default Detail