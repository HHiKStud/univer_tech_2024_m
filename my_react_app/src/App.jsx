import logo from './logo.svg';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

function App() {

  const [posts, setPosts] = useState([])

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(res => setPosts(res))

  return (
    <Layout>
      <Routes>
        <Route path='/:id' element={<HomeComponent posts={posts}/>} />
        <Route path='/info' element={<>info</>} />
        <Route path='/user' element={<>user</>} />
      </Routes>
    </Layout>
  );
}

export default App;

const HomeComponent = ({posts}) => {
  

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      {posts.map((post, index) => <PostComponent postData={post} />)}
    </div>
  )
}

const PostComponent = ({postData}) => {
  return (
    <div style = {{
      border: '1px solid #333',
      padding: '12px',
      borderRadius: '8px'
    }}>
      <p>{postData.userId}</p>
      <p>{postData.title}</p>
      <p>{postData.body}</p>
    </div>
  )
}
