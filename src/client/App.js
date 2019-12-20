import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './app.css'
import { loadPosts } from './modules/posts'

export const App = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(loadPosts())
  }, [])

  return (
    <div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  )
}

export default App
