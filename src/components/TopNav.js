import React from 'react'

const TopNav = (props) => (
	<header id="topnav">
		<div className="inner-third">
		<div className="signin">
        <a
                  href="javascript:;"
                  onClick={() => {
                    props.changeArticle(imgArticle.previous)
                  }}
                >
                  Sign In
                </a>
            <a
                id="signout"
                  href="javascript:;"
                  onClick={() => {
                    props.changeArticle('signout')
                  }}
                  className={`${props.article === 'signout' ? 'active' : ''} ${
                    props.articleTimeout ? 'timeout' : ''
                  }`}
                  style={{ display: 'none' }}
                >
                  Sign Out
                </a>
        </div>
			<div className="cart">
			<a
                  href="javascript:;"
                  onClick={() => {
                    props.changeArticle(imgArticle.previous)
                  }}
                >
                  Shopping Cart
                </a>
			</div>
		</div>

    </header>
)

export default TopNav