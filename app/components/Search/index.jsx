import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link,hashHistory } from 'react-router'

import './style.less'

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div className="search-container">
                <div className="seach">
                    <input type="text" placeholder="请输入关键字" 
                        onChange={this.ChangeHandle.bind(this)}
                        onKeyUp={this.KeyUpHandle.bind(this)}
                        value={this.state.value} ref="refValue"/>
                    <button type="submit" onClick={this.ClickHandle.bind(this)}>搜索</button>
                </div>
                <div className="gjc">
                    <p>主要内容：</p>
                    <ul>
                        <Link to="/search/html"><li>html</li></Link>
                        <Link to="/search/css"><li>css</li></Link>
                        <Link to="/search/jquery"><li>jquery</li></Link>
                        <Link to="/search/javascript"><li>javascript</li></Link>
                        <Link to="/search/asp"><li>ASP</li></Link>
                        <Link to="/search/php"><li>PHP</li></Link>
                    </ul>
                </div>
                <div style={{ clear: 'both' }} />
            </div>
        )
    }
    componentDidMount() {
        // 默认值
        this.setState({
            value: this.props.value || ''
        })
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.value != 'all'){
            this.setState({
                value: this.props.value
            }) 
        }else{
            this.setState({
                value: this.refs.refValue.value
            })
        }
    }
    ChangeHandle(e) {
        // 监控变化
        this.setState({
            value: e.target.value
        })
    }
    KeyUpHandle(e) {
        // 监控 enter 事件
        if (e.keyCode !== 13) {
            return
        }
        this.enterHandle(e.target.value)
    }

    ClickHandle() {
        this.enterHandle(this.state.value)
    }

    enterHandle(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default Search