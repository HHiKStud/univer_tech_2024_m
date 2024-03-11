import logo from './logo.svg';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { useEffect, useState } from 'react';

import { Routes, Route, useParams, useLocation } from 'react-router-dom';

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => setPosts(res))
  }
  
  return (
    <Layout>
      <Routes>
        <Route path='/:id/:uuid' element={<HomeComponent posts={posts}/>} />
        <Route path='/info' element={<InfoPage/>} />
        <Route path='/user' element={<>user</>} />
      </Routes>
    </Layout>
  );
}

export default App;

const HomeComponent = ({posts}) => {
  const params = useParams()
  const location = useLocation()

  console.log('Parametres: ', params)
  console.log('State:', location.state)
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

const InfoPage = () => {
  
  const location = useLocation()

  console.log('info:loc:', location)
  
  const {msg} = location.state
  return(
    <>
      info: {msg}
    </>
  )
}