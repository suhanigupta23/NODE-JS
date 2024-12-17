const posts = [
    { id: 1, title: 'Post One'},
    { id: 2, title: 'Post Two'},
];

const getPosts = () => posts;

export const getPostsLength = () => posts.length 

export default getPosts;
//if we set default as getposts curly braces will not be applied and at time of export we also not apply curly braces.