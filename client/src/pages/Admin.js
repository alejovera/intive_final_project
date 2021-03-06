import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Parse from 'parse/dist/parse';
import { firebaseApp, auth } from '../firebase';
import './styles/Login.css'
function Admin() {
    const [userLoggued, setUserLoggued] = useState(false)

    const [postTitle, setPostTitle] = useState()
    const [image, setImage] = useState()
    const [postSummary, setPostSummary] = useState()
    const [diet, setDiet] = useState()
    const [author, setAuthor] = useState()
    const [readyTime, setReadyTime] = useState()
    const [cuisineType, setCuisineType] = useState()
    const [instructions, setInstructions] = useState()


    const history = useHistory()

    firebaseApp.auth().onAuthStateChanged((user) => {
        if (user) {
          setUserLoggued(true)
        } else {
            return false
        }
      });
    
    async function addPost() {
      try {
        
        const Post = new Parse.Object('Post');
        Post.set('title', `${postTitle}`)
        // Post.set('id', '90');
        Post.set('image', `${image}`);
        Post.set('cuisine', `${cuisineType}`)
        Post.set('summary', `${postSummary}`);
        Post.set('creditsText', `${author}`)
        Post.set('diet', `${diet}`);
        Post.set('readyInMinutes', `${readyTime}`)
        // Post.set('analyzedInstructions', `${instructions}`);
        await Post.save()
      } catch (err) {
        console.error(err)
      }
    }
    const register = (e) => {
        e.preventDefault()
        addPost()
        history.push('/')
    }
    console.log(postTitle);

    
    
    return (
        <>
            {userLoggued ? (
                <div className="signup">
                    <form>
                        <input className="login__input" type="text" onChange={evt => setPostTitle(evt.target.value)} placeholder="title" required="" />
                        <input className="login__input" type="text" onChange={evt => setPostSummary(evt.target.value)} placeholder="summary" required="" />
                        <input className="login__input" type="number" onChange={evt => setReadyTime(evt.target.value)} placeholder="ready time" required="" />
                        <input className="login__input" type="text" onChange={evt => setCuisineType(evt.target.value)} placeholder="cuisine type" required="" />
                        <input className="login__input" type="text" onChange={evt => setDiet(evt.target.value)} placeholder="diet" required="" />
                        <input className="login__input" type="text" onChange={evt => setImage(evt.target.value)} placeholder="enter yor image url" required="" />

                        <input className="login__input" type="text" onChange={evt => setAuthor(evt.target.value)} placeholder="author" required="" />
                        {/* <input className="login__input" type="text" onChange={evt => setInstructions(evt.target.value)} placeholder="instructions" required="" /> */}

                        <button className="login__button" onClick={register}>Create Post</button>
                    </form>
                </div>
            ): (
                <>
                    <h2>Logueate wachin</h2>
                </>
            )}
            
        </>
    )
}

export {Admin}
