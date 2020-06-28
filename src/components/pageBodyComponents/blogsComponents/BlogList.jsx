import React, { useState, useEffect, useRef } from 'react';
import Blog from './Blog';
import data from '../../../data/posts.json';
import './BlogList.scss';

/* 
due to tistory blog open api needs repetitive renewal
static data is required
*/

const BlogList = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const blogList = useRef();

  useEffect(() => {
    setLoading(true);
    setPosts(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (blogList.current) {
      const posts = blogList.current.childNodes;
      for (let i = 0; i < posts.length; i++) {
        posts[i].addEventListener('mouseenter', (e) => {
          e.target.classList.toggle('active');
          for (let j = 0; j < posts.length; j++) {
            if (i !== j) {
              posts[j].classList.toggle('disactive');
            }
          }
        });
        posts[i].addEventListener('mouseleave', (e) => {
          e.target.classList.remove('active');
          for (let j = 0; j < posts.length; j++) {
            if (i !== j) {
              posts[j].classList.remove('disactive');
            }
          }
        });
      }
    }
  });

  if (loading) {
    return (
      <div className="preloader-wrapper small active" style={{ margin: '50%' }}>
        <div className="spinner-layer spinner-red-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!posts) {
    return (
      <div
        className="container"
        style={{ textAlign: 'center', paddingTop: '18%' }}
      >
        <div>
          <i className="material-icons">announcement</i>
        </div>
        <div>No posts Available</div>
      </div>
    );
  }

  return (
    <div ref={blogList} className="blog-list row">
      {posts.map((post) => (
        <Blog key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
