// import libs
import { connect } from 'react-redux'
import Post from '../../Post'

// import components
import Page from './Page'

const mapStateToProps = state => {
  const {data, ...meta} = state.posts
  
  return {
    posts: data.map((post) => new Post(post)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)
