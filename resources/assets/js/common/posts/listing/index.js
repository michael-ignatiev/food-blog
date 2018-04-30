// libs
import { connect } from 'react-redux'
import Post from '../../../modules/post/Post'

// components
import Posts from './components/Posts'

const mapStateToProps = state => {
  const {data, ...meta} = state.posts
  
  return {
    posts: data.map((post) => new Post(post)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Posts)
