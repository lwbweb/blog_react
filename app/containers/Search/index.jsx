import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchList from './subpage/List'

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <SearchList category={this.props.category}/>
            </div>
        )
    }
}

export default Search