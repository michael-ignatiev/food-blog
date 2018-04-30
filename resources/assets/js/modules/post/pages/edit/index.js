import { connect } from 'react-redux'
import Post from '../../Post'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {
  const { params } = router.match
  const post = state.posts.data.find(post => post.id === Number(params.id))
  return {
    post: post ? new Post(post) : new Post({})
  }
}

export default connect(mapStateToProps)(Page)
