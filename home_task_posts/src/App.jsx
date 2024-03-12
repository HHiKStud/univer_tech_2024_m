import './App.css';

import { PageLayout } from './components/Layout/Layout';
import { useEffect, useState } from 'react';
import { Routes, Route, useParams, useLocation, Navigate } from 'react-router-dom';

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
   <Routes>
    <Route path='/*' element={<PageLayout/>}>
      <Route index element={<HomeComponent posts={posts}/>} />
    </Route>

    <Route path='/auth/'>
          <Route index element={<>Nothing here yet.</>} />
          <Route path='login' element={<>Login is not supported yet</>} />
          <Route path='signup' element={<>Signup is not supported yet</>} />
          <Route path='resetpassword' element={<>You don't have a passwoord yet :D</>} />
        </Route>
   </Routes>
  );
}

export default App;

const HomeComponent = ({posts}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px', width: '64em', margin: '0 auto', marginTop: '15px'}}>
      {posts.map((post, index) => <PostComponent postData={post} />)}
    </div>
  )
}

const PostComponent = ({postData}) => {
  var xhr_U = new XMLHttpRequest()
  xhr_U.open("GET", "https://jsonplaceholder.typicode.com/users")
  xhr_U.send()
  let response_u = JSON.parse(xhr_U.response)


  return (
    <div style = {{
      border: '1px solid #333',
      padding: '12px',
      borderRadius: '8px'
    }}>
      <p>{postData.userId === response_u.id}</p>
      <p>{postData.title}</p>
      <p>{postData.body}</p>
    </div>
  )
}