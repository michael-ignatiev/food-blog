// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { postListRequest, postUpdateRequest, postRemoveRequest } from '../../service'

// import components
import PostRow from './components/PostRow'
import Pagination from './components/Pagination'
import { Link } from 'react-router-dom'

class Page extends Component {
  static displayName = 'PostsPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.togglePublish = this.togglePublish.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.pageChange = this.pageChange.bind(this)
  }
  
  componentWillMount() {
    const { dispatch } = this.props
  
    dispatch(postListRequest({}))
  }
  
  pageChange(pageNumber) {
    this.props.dispatch(postListRequest({ pageNumber }))
  }
  
  togglePublish(id) {
    const post = this.props.posts.find(post => (post.id === id))
    
    if (!post)
      return
  
    post.published = !post.published
    if (post.published) {
      post.publishedAt = moment()
    } else {
      post.publishedAt = null
    }
    
    this.props.dispatch(postUpdateRequest(post.toJson()))
  }
  
  handleRemove(id) {
    this.props.dispatch(postRemoveRequest(id))
  }
  
  renderPosts() {
    return this.props.posts.map((post, index) => {
      return <PostRow key={index}
                         post={post}
                         index={index}
                         togglePublish={this.togglePublish}
                         handleRemove={this.handleRemove}/>
    })
  }
  
  render() {
    return <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
      <h1>Posts</h1>
      <table className="table table-responsive table-striped">
        <thead className="thead-inverse">
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Published At</th>
          <th><Link to='/posts/create' className="btn btn-success">Add</Link></th>
        </tr>
        </thead>
        <tbody>
        { this.renderPosts() }
        </tbody>
      </table>
      <Pagination meta={this.props.meta} onChange={this.pageChange}/>
      </main>
  }
}

export default Page
