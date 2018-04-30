// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { postEditRequest, postUpdateRequest } from '../../service'
import ReeValidate from 'ree-validate'

// import components
import Form from './components/Form'

class Page extends Component {
  static displayName = 'EditPost'
  static propTypes = {
    match: PropTypes.object.isRequired,
    post: PropTypes.object,
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
  
  componentWillMount() {
    this.loadPost()
  }
  
  componentWillReceiveProps(nextProps) {
    const post = nextProps.post.toJson()
    
    if (!_.isEqual(this.state.post, post)) {
      this.setState({ post })
    }
    
  }
  
  loadPost() {
    const { match, post, dispatch } = this.props
    
    if (!post.id) {
      dispatch(postEditRequest(match.params.id))
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
    this.props.dispatch(postUpdateRequest(post))
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
  
  renderForm() {
    const { post } = this.props
    
    if (post.id) {
      return <Form {...this.state}
                   onChange={this.handleChange}
                   onSubmit={this.handleSubmit} />
    }
  }
  
  render() {
    return <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
      <h1>Edit</h1>
      { this.renderForm() }
    </main>
  }
}

export default Page
