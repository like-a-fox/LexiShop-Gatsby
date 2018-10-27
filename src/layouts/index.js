import React, { Children } from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'
import Headroom from 'react-headroom'
import { withPrefix } from 'gatsby-link'
import AuthProvider from '../components/Context/AuthProvider'
import CartProvider from '../components/Context/CartProvider'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import TopNav from '../components/TopNav';

class Layout extends React.PureComponent {

  render() {
    const { children } = this.props

    return (
      <AuthProvider>
        <CartProvider>
        <Helmet>
        meta={[
              {
                name: 'description',
                content: 'A starter eCommerce website made using GatsbyJS',
              },
              { name: 'keywords', content: 'ecommerce, gatsby, moltin' },
              { name: 'msapplication-TileColor', content: '#da532c' },
              { name: 'theme-color', content: '#ffffff' },
            ]}
          >
            <html lang="en" />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href={withPrefix('/favicons/apple-touch-icon.png')}
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href={withPrefix('/favicons/favicon-32x32.png')}
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href={withPrefix('/favicons/favicon-16x16.png')}
            />
        </Helmet>

        <div id="wrapper">

          <Header />
          <Container text>{children()}</Container>
          <Footer />

        </div>
          <div id="bg"></div>
          </CartProvider>
      </AuthProvider>
    )
  }
}


export default Layout
