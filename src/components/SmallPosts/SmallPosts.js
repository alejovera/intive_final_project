import React, {useState, useEffect} from 'react'
import { firebaseApp, auth } from '../../firebase';

import Parse from 'parse/dist/parse';

import './SmallPosts.css'
import { Link } from 'react-router-dom';

function SmallPosts({title, image, summary, readyInMinutes, diet, cuisine, creditsText, analyzedInstructions, id}) {

  const [post, setPost] = useState()
  const [userLogued, setUserLogued] = useState()

  firebaseApp.auth().onAuthStateChanged((user) => {
    if (user) {
      setUserLogued(true)
    } else {
      setUserLogued(false)
    }
  });

  async function deletePost() {
    const query = new Parse.Query('Post')
    try {
      const post = await query.get(`${id}`)
      console.log(post);
      await post.destroy()
      // aca tengo q hacer el update,
      //pero el delete ya se esta haciendo
    } catch(error) {
      console.log('Fallo capo ' + error);
    }
  }


  useEffect(() => {
    // addPost()
    fetchPost()
  }, [])


  async function fetchPost() {
    const query = new Parse.Query('Post')
    const Post = await query.first()
    const results = await query.find()
    // const postInfo = {
    //   title: Post.get('title'),
    //   id: Post.get('id'),
    //   image: Post.get('image'),
    //   cuisine: Post.get('cuisine'),
    //   summary: Post.get('summary'),
    //   creditsText: Post.get('creditsText'),
    //   diet: Post.get('diet'),
    //   readyInMinutes: Post.get('readyInMinutes'),
    //   analyzedInstructions: Post.get('analyzedInstructions')
    // }
    // setPost(postInfo)
    setPost(results)
  }


  // async function addPost() {
  //   try {
  //     const Post = new Parse.Object('Post');
  //     Post.set('title', 'Ceviche Peruano');
  //     Post.set('id', 716426);
  //     Post.set('image', 'https://spoonacular.com/recipeImages/716426-312x231.jpg');
  //     Post.set('cuisine', ['Chinese', 'Asian'])
  //     Post.set('summary', 'Ceviche hecho con alacaicas y puerro al doraod por un pato y sembrado por los tataras tataras abuelos del pino');
  //     Post.set('creditsText', 'Jen West')
  //     Post.set('diet', ['vegan', 'dairy free']);
  //     Post.set('readyInMinutes', 45)
  //     Post.set('analyzedInstructions', [{
  //       "steps": [
  //         {
  //           "number": 1,
  //           "step": "esta info del primer paso 1",
  //         },{
  //           "number": 2,
  //           "step": "esta es la info paso 2"
  //         }
  //       ]
  //     }]);


  //     await Post.save()
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

    

    return (
        <>
        {userLogued ? (
          <>
            <div className="small-post__container">
              <Link to={`/posts/${id}`}>

                <img src={`${image}`} alt="" className="small-post__img" />
                <div className="small-post__text">
                    {/* <a href="" className="top-post__link">{cuisine[0]}</a> */}
                      <h3 className="small-post__title">{title}</h3>
                      <p>{summary}</p>

                </div>
              </Link>
                  {/* <p>{readyInMinutes}</p>
                  <p>{diet}</p>
                  <p>{cuisine}</p> */}
                  {/* <p>{analyzedInstructions}</p> */}
                  {/* <p>{id}</p> */}
                  

                  <div className="top-post__author">
                      <span>By {creditsText}</span>
                  </div>
                  <div className="delete__post" onClick={deletePost}>
                    <i class="far fa-times-circle"></i>
                  </div>
              
            </div>
          
          </>
        ): (
          <>
          <Link to={`/posts/${id}`}>
            <div className="small-post__container">
                <img src={`${image}`} alt="" className="small-post__img" />
                <div className="small-post__text">
                    {/* <a href="" className="top-post__link">{cuisine[0]}</a> */}
                    <h3 className="small-post__title">{title}</h3>
                    <p>{summary}</p>
                    {/* <p>{readyInMinutes}</p>
                    <p>{diet}</p>
                    <p>{cuisine}</p> */}
                    {/* <p>{analyzedInstructions}</p> */}
                    {/* <p>{id}</p> */}
                    

                    <div className="top-post__author">
                        <span>By {creditsText}</span>
                    </div>
                </div>
            </div>
          </Link>
          </>
        )}
        
        </>
    )
}

export {SmallPosts}
