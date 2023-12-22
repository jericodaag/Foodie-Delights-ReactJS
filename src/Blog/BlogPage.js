import React, { useState } from 'react';
import { BsCardImage } from 'react-icons/bs';
import BlogList from './BlogList';
import ImageUpload from './ImageUpload';

import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to include Bootstrap CSS

const BlogPage = ({ username }) => {
  const [posts, setPosts] = useState([{ title: '', content: '', imageUrl: '' }]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePostAndImageUpload = () => {
    if (newPost.title && newPost.content) {
      const post = { ...newPost };
      if (selectedImage) {
        post.imageUrl = URL.createObjectURL(selectedImage);
        setSelectedImage(null);
      }
      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '' });
      console.log('Updated Posts:', posts);
    } else {
      console.error('Please enter title and content before adding a post.');
    }
  };

  const handleImageUpload = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Blog</h1>
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="mb-4">What's on your mind, {username}?</h2>

          <div className="form-group">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control mb-2"
              placeholder="Content"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            />
          </div>

          <ImageUpload onImageUpload={handleImageUpload} />

          <button
            className="btn btn-success mb-3"
            onClick={handlePostAndImageUpload}
          >
            <BsCardImage className="mr-2" /> Add Post
          </button>
        </div>
      </div>

      <BlogList posts={posts} />
    </div>
  );
};

export default BlogPage;
