import React from 'react'
import Link from 'gatsby-link'
import Nav from '../components/Nav'
import Image1 from '../images/gallery-photos/gallery1.jpg'
import Image2 from '../images/gallery-photos/gallery2.jpg'
import Image3 from '../images/gallery-photos/gallery3.jpg'
import Image4 from '../images/gallery-photos/gallery4.jpg'
import Image5 from '../images/gallery-photos/gallery5.jpg'
import Image6 from '../images/gallery-photos/gallery6.jpg'
import Image7 from '../images/gallery-photos/gallery7.jpg'
import Image8 from '../images/gallery-photos/gallery8.jpg'
import Image9 from '../images/gallery-photos/gallery9.jpg'
import Image10 from '../images/gallery-photos/gallery10.jpg'
import Image11 from '../images/gallery-photos/gallery11.jpg'
import Image12 from '../images/gallery-photos/gallery12.jpg'
import Image13 from '../images/gallery-photos/gallery13.jpg'
import Image14 from '../images/gallery-photos/gallery14.jpg'
import Image15 from '../images/gallery-photos/gallery15.jpg'

import { addTaskToFirebase } from '../firebase'

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
})

const INITIAL_STATE = {
  name: '',
  email: '',
  message: '',
}

const gallery = [
  {
    url: Image1,
    decription: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    alt: 'gallery-image-1',
    cost: '$59.95',
    previous: 'gallery-image-15',
    next: 'gallery-image-2'
  },
  {
    url: Image2,
    decription: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    alt: 'gallery-image-2',
    cost: '$59.95',
    previous: 'gallery-image-1',
    next: 'gallery-image-3'
  },
  {
    url: Image3,
    decription: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    alt: 'gallery-image-3',
    cost: '$59.95',
    previous: 'gallery-image-2',
    next: 'gallery-image-4'
  },
  {
    url: Image4,
    decription: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    alt: 'gallery-image-4',
    cost: '$59.95',
    previous: 'gallery-image-3',
    next: 'gallery-image-5'
  },
  {
    url: Image5,
    decription: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    alt: 'gallery-image-5',
    cost: '$59.95',
    previous: 'gallery-image-4',
    next: 'gallery-image-6'
  },
  {
    url: Image6,
    decription: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    alt: 'gallery-image-6',
    cost: '$59.95',
    previous: 'gallery-image-5',
    next: 'gallery-image-7'
  },
  {
    url: Image7,
    decription: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    alt: 'gallery-image-7',
    cost: '$59.95',
    previous: 'gallery-image-6',
    next: 'gallery-image-8'
  },
  {
    url: Image8,
    decription: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    alt: 'gallery-image-8',
    cost: '$59.95',
    previous: 'gallery-image-7',
    next: 'gallery-image-9'
  },
  {
    url: Image9,
    decription: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    alt: 'gallery-image-9',
    cost: '$59.95',
    previous: 'gallery-image-8',
    next: 'gallery-image-10'
  },
  {
    url: Image10,
    decription: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    alt: 'gallery-image-10',
    cost: '$59.95',
    previous: 'gallery-image-9',
    next: 'gallery-image-11'
  },
  {
    url: Image11,
    decription: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    alt: 'gallery-image-11',
    cost: '$59.95',
    previous: 'gallery-image-10',
    next: 'gallery-image-12'
  },
  {
    url: Image12,
    decription: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    alt: 'gallery-image-12',
    cost: '$59.95',
    previous: 'gallery-image-11',
    next: 'gallery-image-13'
  },
  {
    url: Image13,
    decription: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    alt: 'gallery-image-13',
    cost: '$59.95',
    previous: 'gallery-image-12',
    next: 'gallery-image-14'
  },
  {
    url: Image14,
    decription: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    alt: 'gallery-image-14',
    cost: '$59.95',
    previous: 'gallery-image-13',
    next: 'gallery-image-15'
  },
  {
    url: Image15,
    decription: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    alt: 'gallery-image-15',
    cost: '$59.95',
    previous: 'gallery-image-14',
    next: 'gallery-image-1'
  },
]

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      ...INITIAL_STATE,
      hasSent: false,
    }
    this.showCardBack = this.showCardBack.bind(this)
  }
  showCardBack = () => {
    this.setState(() => ({
      isBackVisible: !this.state.isBackVisible,
    }))
  }

  clearData = () => {
    this.setState(() => ({
      ...INITIAL_STATE,
    }))
  }
  resetData = () => {
    this.setState(() => ({
      ...INITIAL_STATE,
      hasSent: false,
    }))
  }

  isSubmitted = () => {
    this.setState({
      hasSent: true,
    })
  }


  render() {
    let nav = (
      <nav className="bottom">
        <ul>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                this.props.changeArticle('gallery')
              }}
            >
              Gallery Of Six
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                this.props.changeArticle('store')
              }}
            >
              Bazaar
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                this.props.changeArticle('cohorts')
              }}
            >
              Kindered Souls
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                this.props.changeArticle('contact')
              }}
            >
              Reach Out
            </a>
          </li>
        </ul>
      </nav>
    )

    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    let imageGallery = gallery.map(image => (<div className="galleryItem">
      <img onClick={() => {
        this.props.changeArticle(image.alt);
      } } className="galleryImage" src={image.url} alt={image.alt} />
    </div>))

    let galleryArticles = gallery.map(imgArticle => (<article
          id={imgArticle.alt}
          className={`${
            this.props.article === imgArticle.alt ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">{imgArticle.alt}</h2>

          <div className="fullImg">
            <img
              onClick={() => {
                this.props.changeArticle(imgArticle.next)
              }}
              src={imgArticle.url} />
          </div>
          <nav className="bottom">
            <ul>
              <li>
                <a
                  href="javascript:;"
                  onClick={() => {
                    this.props.changeArticle(imgArticle.previous)
                  }}
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  onClick={() => {
                    this.props.changeArticle('gallery')
                  }}
                >
                  Gallery Of Six
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  onClick={() => {
                    this.props.changeArticle(imgArticle.next)
                  }}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
          {close}
        </article>))

    let shoppingItems = gallery.map(shoppingItem => (
<div onClick={this.props.showCardBack} className={`${this.props.isBackVisible ? 'back' : 'front'}`} >
        <img src={shoppingItem.url} alt={shoppingItem.alt} />
        <div className="bottom">
          <ul>
            <li>
              {shoppingItem.alt}
              </li>
            <li>
              Price: {shoppingItem.cost}
            </li>
        </ul>
        </div>
        <div className="backSection">
          <h2>{shoppingItem.alt}</h2>
          <ul>
            <li>
              Price: {shoppingItem.cost}
            </li>
            <li>
              <button className="add-to-cart">
              Add To Cart
              </button>
              </li>
        </ul>
          <div className="description">
            {shoppingItem.decription}
            </div>
        </div>
</div>
    ))

    const { name, email, message, hasSent } = this.state

    const isInvalid = name === '' || email === '' || message === ''
    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {galleryArticles}
        <article
          id="gallery"
          className={`${this.props.article === 'gallery' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Gallery Of Six</h2>
          <div className="gallery">{imageGallery}</div>

          {nav}

          {close}
        </article>

        <article
          id="store"
          className={`${this.props.article === 'store' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Bazaar</h2>
          <div className="bazaar">{shoppingItems}</div>
          {nav}
          {close}
        </article>

        <article
          id="cohorts"
          className={`${this.props.article === 'cohorts' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Connected Souls</h2>

          {nav}
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <ul className="actions top">
            <li>
              {' '}
              <h2 className="major contact">Contact</h2>
            </li>
            <li className={`sent ${hasSent ? 'has-sent' : ''}`}>
              Your <strong>stupid</strong> message has been sent!
            </li>
          </ul>

          <form
            onSubmit={e => {
              e.preventDefault()
              const { name, email, message } = this.state
              const date = Date()
              const websiteOrigin = 'By The Horns'
              const html = `
                    <div>From: ${name}</div>
                    <div>Email: <a href="mailto:${email}">${email}</a></div>
                    <div>Date: ${date}</div>
                    <div>Origin Site: ${websiteOrigin}</div>
                    <div>Message: ${message}</div>
                    `
              let contactData = {
                name,
                email,
                message,
                date,
                websiteOrigin,
                html,
              }
              addTaskToFirebase(contactData)
              this.isSubmitted()
              this.clearData()
            }}
          >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="on"
                required
                value={name}
                onChange={event =>
                  this.setState(
                    updateByPropertyName('name', event.target.value)
                  )
                }
              />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="on"
                required
                value={email}
                onChange={event =>
                  this.setState(
                    updateByPropertyName('email', event.target.value)
                  )
                }
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="6"
                required
                value={message}
                onChange={event =>
                  this.setState(
                    updateByPropertyName('message', event.target.value)
                  )
                }
              />
            </div>

            <ul className="mixed-row">
              <ul className="actions">
                <li>
                  <input
                    disabled={isInvalid}
                    type="submit"
                    className="special"
                  />
                </li>
                <li>
                  <input type="reset" value="Clear" onClick={this.resetData} />
                </li>
              </ul>
              <ul className="icons">
                <li>
                  <a
                    href="https://twitter.com/InanisUmbra"
                    className="icon fa-twitter"
                  >
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/inanisumbra"
                    className="icon fa-facebook"
                  >
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/inanis.umbra"
                    className="icon fa-instagram"
                  >
                    <span className="label">Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/like-a-fox"
                    className="icon fa-github"
                  >
                    <span className="label">GitHub</span>
                  </a>
                </li>
              </ul>
            </ul>
          </form>
          {nav}

          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  isBackVisible: React.PropTypes.bool,
  onOpenArticle: React.PropTypes.func,
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Main
