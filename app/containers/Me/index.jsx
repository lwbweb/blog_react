import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Me extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div className="Memain-container">
                <h1>About me</h1>
                <div className="meMian">
                    <p>My name is Lwb. You can call me loser. I was born in 1994s.</p>
                    <p>I am an IT developer focusing on web technology. Now I am employed by ishuaituo.com as an FE engineer.</p>
                    <p>In spare time, I like surfing internet, play LOL and work.</p>
                </div>
            </div> 
        )
    }
}

export default Me