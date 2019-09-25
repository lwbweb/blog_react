import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SelfIntro from '../../components/SelfIntro/index'
import List from './subpage/List'

class ResultList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params = this.props.params
        return (
            <div>
                <SelfIntro title="搜索结果" subTitle="对于IT从业者、学会通过搜索来寻找学习资源，是必不可少的一步"/>
                <List keyword={params.keyword} category={params.category}/>
            </div>
        )
    }
}

export default ResultList
