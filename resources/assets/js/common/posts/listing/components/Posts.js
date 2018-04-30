import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

class Posts extends Component {
  static displayName = 'Posts'
  static propTypes = {
    posts: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      //
    }
  }
  
  renderPosts() {
    return this.props.posts.map((post, index) => {
      return <Post key={`post-${index}`}
                      index={index}
                      post={post}/>
    })
  }
  
  render() {
    return (<section id="components-posts">
      <div className="container">
        <div className="row">
          { this.props.posts && this.renderPosts() }
        </div>
      </div>
    </section>)
  }
}

export default Posts
