import React from 'react';
import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const gatedPosts = [...posts].map(post => (
  {
    ...post,
    comments: comments.filter(comment => comment.postId === post.id) || null,
    user: users.find(user => user.id === post.userId) || null,
  }));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList props={gatedPosts} />
  </div>
);

export default App;
