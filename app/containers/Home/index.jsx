import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SelfIntro from '../../components/SelfIntro/index'
import List from './subpage/List'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <SelfIntro title="前端工程师" subTitle="一个web前端开发工程师需要具备的技能，包括：html、css、一种css框架（bootstrap）、一种javascript框架（jquery）。一个成功的人，实力+机遇，缺一不可。千里马常有、而伯乐不常有，待在一个小的公司，所涉及的范围狭小，即使俩三年经验，依旧如故，不能突破。"/>
                <List />
            </div>
        )
    }
}

export default Home
