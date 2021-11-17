import React, { useState, useEffect } from 'react'

import { Home } from './pages/Home';
import {Login} from './pages/Login';
import { Admin } from './pages/Admin';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Parse from 'parse/dist/parse'

import './App.css'
const PARSE_APPLICATION_ID = 'Jw6rsQ8Kc0fYGNaApWFehIHaUSpsaasTM9TWoLXw';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'GRaiHyUNsNqQu5jdvlTXaEdf7VFOrPbth9AOcb8L';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


const API_KEY = 'e97329be8b32403880bf659279fa5ae9';

function App() {

  // const [unstructureData, setUnstructureData] = useState()

  // const [post, setPost] = useState(null)

  //sourceName, diet, title, image, summary
  //GET https://api.spoonacular.com/recipes/{id}/information
  // useEffect(() => {
  //   fetch(`https://api.spoonacular.com/recipes/complexSearch?&addRecipeInformation=true&number=10&diet=true&summary=true&apiKey=${API_KEY}`)
  //     .then(res => res.json())
  //     .then(data => setUnstructureData({
  //       title0: data.results[0].title,
  //       summary0: data.results[0].summary,
  //       image0: data.results[0].image,
  //       readyInMinutes0: data.results[0].readyInMinutes,
  //       creditsText0: data.results[0].creditsText,
  //       id0: data.results[0].id,
  //       cuisine0: data.results[0].cuisines,
  //       diet0: data.results[0].diets,
  //       analyzedInstructions0: data.results[0].analyzedInstructions,
  //     }))
  

      
  // }, [])
  // console.log(unstructureData);


  // useEffect(() => {
    
  //   (async function addPost() {
  //     try {
  //       // create a new Parse Object instance
  //       const Post = new Parse.Object('Post');
  //       // define the attributes you want for your Object
  //       Post.set('title', unstructureData.title0);
  //       Post.set('summary', unstructureData.summary0);
  //       Post.set('image', unstructureData.image0);
  //       Post.set('cuisine', unstructureData.cuisine0);
  //       Post.set('id', unstructureData.id0);
  //       Post.set('diet', unstructureData.diet0);
  //       Post.set('creditsText', unstructureData.creditsText0);
  //       Post.set('analyzedInstructions', unstructureData.analyzedInstructions0);
  //       Post.set('readyInMinutes', unstructureData.readyInMinutes0);
  //       // Person.set('email', 'john@back4app.com');
  //       // // save it on Back4App Data Store
  //       await Post.save();
  //       alert('Post saved!');
  //     } catch (error) {
  //       console.log('Error saving new person: ', error);
  //     }
  //   })()

  // }, [unstructureData])
  

  // console.log(unstructureData.results[0].creditsText);

  


  // const resultsPost = unstructureData.results;

  // const mappedPosts = resultsPost.map(item => {
  //   setPost({
  //     title: item.title,
  //     summary: item.summary,
  //     image: item.image,
  //     id: item.id,
  //     diet: item.diets,
  //     creditsText: item.creditsText,
  //     cousine: item.coisine,
  //   })
  // })

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  )
}

export default App
 