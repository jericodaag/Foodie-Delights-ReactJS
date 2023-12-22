import React from 'react';
import { BsCardText } from 'react-icons/bs';

const iconColor = "#8DC63F"; // Set icon color to the specified color

const BlogList = ({ posts }) => {
  // Filter out posts with empty titles
  const filteredPosts = posts.filter(post => post.title.trim() !== '');

  // Ensure that filteredPosts is an array before mapping over it
  const postItems = filteredPosts && Array.isArray(filteredPosts) ? (
    filteredPosts.map((post, index) => (
      <div key={index} className="card mb-4">
        <div className="card-body" style={{ height: '500px', maxHeight: '500px', overflow: 'hidden' }}>
          <h2 className="card-title">
            <BsCardText className="mr-2" color={iconColor} />
            {post.title}
          </h2>
          <p className="card-text" align="center">{post.content}</p>
          {post.imageUrl && (
            <div className="text-center">
              <img
                src={post.imageUrl}
                alt={`Image for ${post.title}`}
                className="img-fluid rounded"
                style={{ border: '2px solid #8DC63F', maxHeight: '300px', maxWidth: '300px', objectFit: 'fit' }}
              />
            </div>
          )}
        </div>
      </div>
    ))
  ) : (
    <p>No posts to display</p>
  );

  return (
    <div className="container-fluid mt-4">
      <center>
      <h2 className="mb-4">Posts</h2>
      </center>
      {postItems}
    </div>
  );
};

export default BlogList;
