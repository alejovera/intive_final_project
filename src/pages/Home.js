import React from 'react'
import {Navbar} from '../components/Navbar/Navbar'
import {Post} from '../components/Post/Post'
import {SmallPosts} from '../components/SmallPosts/SmallPosts'
import {Footer} from '../components/Footer/Footer'

function Home() {
    return (
    <>
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
    </>
    )
}

export {Home}
