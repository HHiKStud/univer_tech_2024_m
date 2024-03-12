import './App.css';

import { PageLayout } from './components/Layout/Layout';
import { useEffect, useState } from 'react';
import { Routes, Route, useParams, useLocation, Navigate } from 'react-router-dom';

function App() {
  const [ data, setData ] = useState([]);

  const getData = type => fetch(`https://jsonplaceholder.typicode.com/${type}`).then(res => res.json());

  useEffect(() => {
    Promise
      .all([ 'posts', 'users' ].map(getData))
      .then(([ posts, users ]) => {
        const usersObj = Object.fromEntries(users.map(n => [ n.id, n ]));
        setData(posts.map(n => ({
          post: n,
          user: usersObj[n.userId],
        })));
      });
}, []);
  
  return (
   <Routes>
    <Route path='/*' element={<PageLayout/>}>
      <Route index element={<HomeComponent data={data}/>} />
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

const HomeComponent = ({data}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px', width: '64em', margin: '0 auto', marginTop: '15px'}}>
      {data.map(({ post, user }) => (
        <div style = {{border: '1px solid #333', padding: '12px', borderRadius: '8px'}}>
          <h2>{post.title}</h2>
          <h3>{user.name}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div> 
  )
}
