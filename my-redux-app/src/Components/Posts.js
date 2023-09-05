import React, { Component } from 'react'
import PropTypes from 'prop-types'

//get posts from store
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

	componentDidMount(){
		this.props.fetchPosts();
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.newPost) {
			this.props.posts.unshift(nextProps.newPost);
		}
	}

	// these 2 things wont be needed after redux
	// // component state
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		posts: []
	// 	}
	// }

	// // as soon as component mounts 
	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/posts')
	// 		.then(res => res.json())
	// 		.then(data => this.setState({ posts: data }))
	// }

	render() {

		const postItems = this.props.posts.map(post => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		)
		);

		return (
			<div>
				Posts
				{postItems}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	posts: state.posts.items,
	newPost : state.posts.item
})

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
	newPost: PropTypes.object
}

export default connect(mapStateToProps, {fetchPosts})(Posts);