import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Blog() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts(){
    axios.get('https://test.emmafang.com/blog.php').then(function(response){
        console.log(response.data);
        setPosts(response.data);
    })
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post, key) => (
          <li key={key}>
            <h2 className='text-[green] bg-[grey]'>{post.title}</h2>
            <p className='text-[blue]'>{post.content}</p>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default Blog;
