import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SelfIntro extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="tj">
                <a><h2>{this.props.title}</h2></a>
                <p>{this.props.subTitle}</p>
            </div>
        )
    }
}

export default SelfIntro