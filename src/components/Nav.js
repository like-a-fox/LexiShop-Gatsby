import React from 'react'

const Nav = (props) => (
	<nav className="bottom">
		 <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('gallery')}}>Gallery Of Six</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('store')}}>Bazaar</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('cohorts')}}>Kindered Souls</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Reach Out</a></li>
            </ul>
	</nav>
)

Nav.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Nav