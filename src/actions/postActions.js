import { FETCH_POSTS,NEW_POSTS } FROM './types';
export const fetchPosts=()=>dispatch=>
{
	
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res=>res.json())
		.then(data=>dispatch({

type: FETCH_POSTS,
payload:posts
		}));
	
	
}