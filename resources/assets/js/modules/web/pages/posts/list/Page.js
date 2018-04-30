import React, { Component } from "react"
import PropTypes from "prop-types"

// import components
import Posts from "../../../../../common/posts/listing/index"

// import services
import { postListRequest } from "../../../../post/service"

class Page extends Component {
  static displayName = "HomePage"
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(postListRequest({ url: '/posts/published' }))
  }

  render() {
    return <div>
      <Posts/>
    </div>
  }
}

export default Page
