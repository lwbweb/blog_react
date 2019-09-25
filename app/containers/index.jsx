import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import Header from '../components/Header/index'
import Search from '../containers/Search/index'
import HotList from '../containers/Home/subpage/HotList'
import FooterNav from '../components/FootNav/index'
import Footer from '../components/Footer/index'


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params = this.props.params
        return (
            <div>
                <Header />
                <div className="main">
                    <div className="main-left">
                    {
                        this.props.children
                    }
                    </div>
                    <div className="main-right">
                        <Search category={params.category}/>
                        <HotList />
                    </div>
                    <div style={{ clear: 'both' }} />
                </div>
                <FooterNav />
                <Footer />
            </div>
        )
    }
    componentDidUpdate() {
        this.backToTop();
    }

    backToTop(){
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop > 0){
            document.body.scrollTop = 0;
        }
    }
}

export default App
