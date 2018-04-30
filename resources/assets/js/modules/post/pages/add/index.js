import { connect } from 'react-redux'
import Post from '../../Post'

// import components
import Page from './Page'

const mapStateToProps = () => {
  const post = new Post({})
  return {
    post
  }
}

export default connect(mapStateToProps)(Page)
