import { useState, useEffect } from 'react'
import PostsPage from './components/PostsPage'
import PostsContext from './contexts/PostsContext'
import axios from 'axios'

function App() {

  const baseUrl = 'http://localhost:3000';
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/posts`).then((res) => {
      setPosts(res.data.posts)
    })
  }, [])

  return (
    <>
      <PostsContext.Provider value={posts}>
        <PostsPage />
      </PostsContext.Provider>
    </>
  )
}

export default App
