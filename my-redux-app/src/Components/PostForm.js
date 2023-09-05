import React, { Component } from 'react'
import { createPost } from '../actions/postActions';
import {connect }  from 'react-redux'
import PropTypes from 'prop-types'

class PostForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: "",
			body: ""
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();
		const post = {
			title: this.state.title,
			body: this.state.body
		}

		// call action
		this.props.createPost(post); 

		// fetch('https://jsonplaceholder.typicode.com/posts', {
		// 	method: 'POST',
		// 	headers: {
		// 		'content-type': 'application/json'
		// 	},
		// 	body: JSON.stringify(post)
		// }).then(res => res.json())
		// 	.then(data => console.log(data))
	}

	render() {
		return (
			<div>
				<h2>FORM</h2>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title :</label>
						<br />
						<input type='text' name='title' value={this.state.title} onChange={this.onChange} />
					</div>
					<br />
					<div>
						<label>Body : </label>
						<br />
						<textarea name='body' value={this.state.body} onChange={this.onChange} />
					</div>
					<br />
					<div>
						<button type='submit'>Add Post</button>
					</div>
				</form>
			</div>
		)
	}
}

PostForm.propTypes = {
	createPost: PropTypes.func.isRequired,
}

export default connect(null, {createPost})(PostForm);