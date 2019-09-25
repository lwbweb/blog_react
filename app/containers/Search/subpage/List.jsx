import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Searcher from '../../../components/Search/index'

class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <Searcher value={this.props.category || ''}/>
        )
    }
    

    componentWillMount() {
        if (!this.props.keyword) {
            this.setState({
                value: this.props.category || ''
            })
        }else{
            this.setState({
                value: this.props.keyword || ''
            })
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const keyword = this.props.keyword
        const category = this.props.category

        // 搜索条件完全相等时，忽略。重要！！！
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return
        }

        // 重置 state
        if (!keyword) {
            this.setState({
                value: category || ''
            })
        }else if (category == 'all') {
            this.setState({
                value: keyword || ''
            })
        }else{
            this.setState({
                value: keyword || ''
            })
        }
    }

    
}

export default SearchList