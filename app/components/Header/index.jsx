import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link,IndexLink } from 'react-router'

import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="header-container">
                <header className="lwbhead">
                    <div className="logo">
                        <img src={require("./logo.png")}  alt="" />
                    </div>
                    <nav className="lwbnav">
                        <ul>
                            <li><IndexLink to="/">首页</IndexLink></li>
                            <li><Link to="/me">个人</Link></li>
                            <li><Link to="/article">文章</Link></li>
                            <li><Link to="/essay">随笔</Link></li>
                            <li><Link to="/message">留言</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header