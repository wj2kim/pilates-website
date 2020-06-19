import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import data from '../../../data/posts.json';
import './BlogList.scss';

/* 
due to tistory blog open api needs steady renewal
static data is required
*/

const BlogList = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setPosts(data);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div class="preloader-wrapper small active" style={{ margin: '50%' }}>
        <div class="spinner-layer spinner-red-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!posts) {
    return (
      <div class="container" style={{ textAlign: 'center', paddingTop: '18%' }}>
        <div>
          <i class="material-icons">announcement</i>
        </div>
        <div>No posts Available</div>
      </div>
    );
  }

  return (
    <div className="blog-list row">
      {posts.map((post) => (
        <Blog key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
