// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { postAddRequest } from '../../service'
import ReeValidate from 'ree-validate'

// import components
import Form from './components/Form'

class Page extends Component {
  static displayName = 'AddPost'
  static propTypes = {
    post: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)

    this.validator = new ReeValidate({
      title: 'required|min:3',
      content: 'required|min:10',
      description: 'required|min:10',
    })
    
    const post = this.props.post.toJson()
    
    this.state = {
      post,
      errors: this.validator.errors
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  componentWillReceiveProps(nextProps) {
    const post = nextProps.post.toJson()
    
    if (!_.isEqual(this.state.post, post)) {
      this.setState({ post })
    }
    
  }
  
  handleChange(name, value) {
    const { errors } = this.validator
  
    this.setState({ post: { ...this.state.post, [name]: value} })
  
    errors.remove(name)
  
    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const post = this.state.post
    const { errors } = this.validator
    
    this.validator.validateAll(post)
      .then((success) => {
        if (success) {
          this.submit(post)
        } else {
          this.setState({ errors })
        }
      })
  }
  
  submit(post) {
    this.props.dispatch(postAddRequest(post))
      .catch(({ error, statusCode }) => {
        const { errors } = this.validator
  
        if (statusCode === 422) {
          _.forOwn(error, (message, field) => {
            errors.add(field, message);
          });
        }
  
        this.setState({ errors })
      })
  }
  
  render() {
    return <div className="col-sm-9 ml-sm-auto col-md-10 pt-3">
      <h1>Edit</h1>
      <Form {...this.state}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} />
    </div>
  }
}

export default Page
