import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ListItem from './Item/index'
import './style.less'

class HotListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="hotlist">
                <div className="rpwz">
                    <p>热评文章</p>
                    <ul>
                        {this.props.data.map((item, index) => {
                            return <ListItem key={index} data={item}/>
                        })}
                    </ul>
                </div>
                <div className="ggw">
                    <img src={require("./log.png")} alt="" />
                    <p>卢文博</p>
                </div>
                <div style={{ clear: 'both' }} />
            </div>
        )
    }
}

export default HotListItem