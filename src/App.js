import React from 'react'
import './App.css'
import {Navbar} from './components/Navbar/Navbar'
import {Post} from './components/Post/Post'
import {SmallPosts} from './components/SmallPosts/SmallPosts'
import {Footer} from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Post />
      <div className="post__layout">
        <SmallPosts />
        <SmallPosts />
        <SmallPosts />
        <SmallPosts />
        <SmallPosts />
        <SmallPosts />
        <SmallPosts />
        <SmallPosts />
        <SmallPosts />
      </div>
      <Footer />
    </div>
  )
}

export default App
