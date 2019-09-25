import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import './style.less'

class FooterNav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="footernav-container">
                <div className="lj">
                    <div className="cont">
                        <div className="cong-left" />
                        <div className="cont-right">
                            <ul>
                                <Link to="/me"><li>个人简介</li></Link>
                                <Link to="/article"><li>文章</li></Link>
                                <Link to="/essay"><li>随笔</li></Link>
                                <Link to="/message"><li>留言</li></Link>
                            </ul>
                            <br />
                            <p>搞事、我们是认真的</p>
                        </div>
                    </div>
                </div>
                <div style={{ clear: 'both' }} />
            </div>
        );
    }
}

export default FooterNav