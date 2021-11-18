import React, {useState, useEffect} from 'react'
import Parse from 'parse/dist/parse';
import {Navbar} from '../components/Navbar/Navbar'
import {Post} from '../components/Post/Post'
import {SmallPosts} from '../components/SmallPosts/SmallPosts'
import {Footer} from '../components/Footer/Footer'

function Home() {
    const [counter, setCounter] = useState([])

    useEffect(() => {
        fetchPost()
    }, [counter])
    async function fetchPost() {
        const query = new Parse.Query('Post')
        const Post = await query.first()
        const results = await query.find()
        console.log(results);
        return setCounter(results);
    }
    return (
    <>
        <Navbar />
        <Post />
        <div className="post__layout">
            {counter.map(item => (
                <SmallPosts key={item.id} id={item.id} analyzedInstructions={item.attributes.analyzedInstructions} readyInMinutes={item.attributes.readyInMinutes} diet={item.attributes.diet} creditsText={item.attributes.creditsText} cuisine={item.attributes.cuisine} summary={item.attributes.summary} image={item.attributes.image} title={item.attributes.title} />
            ))}
        </div>
        <Footer />
    </>
    )
}

export {Home}
