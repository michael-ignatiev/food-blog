// import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import { Link } from 'react-router-dom'

const displayName = 'PostComponent'
const propTypes = {
  index: PropTypes.number.isRequired,
  post: PropTypes.object.isRequired,
}

const renderPublishedAt = (post) => {
  return post.publishedAt && `at ${post.publishedAt.format('MMMM D, YYYY')}`
}

function render ({ post }) {
  return <div className="col-12 col-sm-9 mb-5 mx-auto">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{post.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{renderPublishedAt(post)}</h6>
        <p className="card-text">{ post.description }</p>
        <Link to={`posts/${post.slug}`} className="card-link">Read More</Link>
      </div>
    </div>
  </div>
}

render.displayName = displayName
render.propTypes = propTypes

export default render
