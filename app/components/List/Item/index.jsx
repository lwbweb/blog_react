import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import './style.less'

class ListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div className="lb">
                <Link to={'/detail/' + data.id}>
                    <div className="lbtp">
                        <img src={require("./123.png")} alt={data.alt} />
                    </div>
                    <div className="lbjs">
                        <h2>{data.title}</h2>
                        <span>发布时间:{data.time}</span>
                        <p>{data.subTitle}</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ListItem