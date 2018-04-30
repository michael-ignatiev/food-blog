import React, { Component } from "react"
import PropTypes from "prop-types"

// import components
import Header from "./components/Header"
import Posts from "../../../../common/posts/listing"

// import services
import { postListRequest } from "../../../post/service"

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
      <Header/>
      <Posts/>
    </div>
  }
}

export default Page
