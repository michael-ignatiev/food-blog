import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'PostRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  post: PropTypes.object.isRequired,
  togglePublish: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

const PostRow = ({ index, post, togglePublish, handleRemove }) => {
  return (<tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{post.title}</td>
    <td>{post.description}</td>
    <td>{post.createdAt && post.createdAt.format('MMMM, DD YYYY')}</td>
    <td>{post.updatedAt && post.updatedAt.format('MMMM, DD YYYY')}</td>
    <td>{post.publishedAt && post.publishedAt.format('MMMM, DD YYYY')}</td>
    <td>
      <div className="btn-group" role="group" aria-label="Actions">
        {
          post.published
          ? <button className="btn btn-warning" onClick={() => togglePublish(post.id)}>Un Published</button>
          : <button className="btn btn-success" onClick={() => togglePublish(post.id)}>Publish</button>
        }
        <Link className="btn btn-success" to={`posts/${post.id}/edit`}>Edit</Link>
        <button className="btn btn-danger" onClick={() => handleRemove(post.id)}>Delete</button>
      </div>
    </td>
  </tr>)
}

PostRow.displayName = displayName
PostRow.propTypes = propTypes

export default PostRow