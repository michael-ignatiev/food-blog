// import libs
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DocumentTitle from 'react-document-title';
import {postFetchRequest} from '../../../../post/service'
import {APP_TITLE} from '../../../../../values/index'

class Page extends Component {
  static displayName = 'PostShowPage'
  static propTypes = {
    match: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      //
    }
  }

  componentWillMount() {
    this.loadPost()
  }

  loadPost() {
    const {match, post, dispatch} = this.props

    if (!post.slug) {
      dispatch(postFetchRequest(match.params.slug))
    }
  }

  renderPublishedDate() {
    const {publishedAt} = this.props.post

    if (publishedAt) {
      return `at ${publishedAt.format('MMMM d, YYYY')}`
    }
  }

  renderAuthor() {
    const {user} = this.props.post

    if (user) {
      return `by ${user.name}`
    }

  }

  createMarkup() {
    return {__html: this.props.post.content};
  }

  renderPost() {
    const {post} = this.props
    return (<div className="col-12 col-sm-9 mb-5 mx-auto">
      <h2>{post.title}</h2>
      <small className="text-muted mb-5">{this.renderPublishedDate()} {this.renderAuthor()}</small>
      <p className="text-muted mb-5">{post.description}</p>
      <div dangerouslySetInnerHTML={this.createMarkup()}/>
    </div>)
  }

  render() {
    return (
      <DocumentTitle title={`${this.props.post.title} - ${APP_TITLE}`}>
        <section id="components-posts">
          <div className="container">
            <div className="row">
              {this.renderPost()}
            </div>
          </div>
        </section>
      </DocumentTitle>
    )
  }
}

export default Page
