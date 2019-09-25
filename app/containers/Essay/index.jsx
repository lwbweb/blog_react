import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SelfIntro from '../../components/SelfIntro/index'
import EssayList from './subpage/index'

class Essay extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <SelfIntro title="随笔" subTitle="此博客文章可能来自转载、但会注明出处和申明转载，此博客为个人react技术栈的实践作品，接受一切善意的建议，拒绝一切恶意与无聊的瞎bb、"/>
                <EssayList />
            </div>
        )
    }
}

export default Essay
