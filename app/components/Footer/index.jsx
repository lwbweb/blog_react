import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Footer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="footer-container">
                <div className="footer">
                    <p>版权所有：Wenbo Lu；页面开发：Wenbo Lu</p>
                </div>
            </div>
        );
    }
}

export default Footer