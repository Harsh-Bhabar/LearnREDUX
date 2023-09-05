import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
	// console.log("Fetching posts");
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(posts => dispatch({
			type: FETCH_POSTS,
			payload: posts
		}));
}

export const createPost = (postData) => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(postData)
	}).then(res => res.json())
		.then(post => dispatch({
			type: NEW_POST,
			payload: post
		}))
}

// // component state
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			posts: []
// 		}
// 	}

// 	// as soon as component mounts
// 	componentDidMount() {
// 	fetch('https://jsonplaceholder.typicode.com/posts')
// 		.then(res => res.json())
// 		.then(data => this.setState({ posts: data }))
// 	}