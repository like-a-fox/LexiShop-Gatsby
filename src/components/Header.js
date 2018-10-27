import React from 'react'
import logo from '../../static/favicon-192x192.png';

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="store-logo"><img src={logo} /></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>By The Horns</h1>
                <p>'Exploration of my mind'</p>
                <p className="indented">- Lexi Hooker</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('gallery')}}>Gallery Of Six</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('store')}}>Bazaar</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('cohorts')}}>Kindered Souls</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Reach Out</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
