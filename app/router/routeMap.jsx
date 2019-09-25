import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers/index'
import Home from '../containers/Home/index'
import Detail from '../containers/Detail/index'
import Me from '../containers/Me/index'
import Article from '../containers/Article/index'
import Essay from '../containers/Essay/index'
import Message from '../containers/Message/index'
import Result from '../containers/Result/index'
import NotFound from '../containers/404'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/me' component={Me}/>
                    <Route path='/article' component={Article} />
                    <Route path='/essay' component={Essay}/>
                    <Route path='/message' component={Message} />
                    <Route path='/detail/:id' component={Detail} />
                    <Route path='/search/:category(/:keyword)' component={Result}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap
