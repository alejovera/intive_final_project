import React, { useState, useEffect } from 'react'

import { Home } from './pages/Home';
import {Login} from './pages/Login';
import {PostDetail} from './pages/PostDetail';
import { Admin } from './pages/Admin';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Parse from 'parse/dist/parse'

import './App.css'
import { Navbar } from './components/Navbar/Navbar';
const PARSE_APPLICATION_ID = 'eiafq36mzdNNl7pmDx1CB4m4YPll9Yjbhi5sk9Io';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'Z98ycVRHgEESrWg2SboMOznCtpI1ihePTR4x6qvA';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


const API_KEY = 'e97329be8b32403880bf659279fa5ae9';
const numberOfPosts = 1

function App() {

  const [unstructureData, setUnstructureData] = useState()

  // const fetchPosts = () => {
  // }

  useEffect(() => {
    // fetchPosts()
    fetch(`https://api.spoonacular.com/recipes/complexSearch?&addRecipeInformation=true&number=${numberOfPosts}&diet=true&summary=true&apiKey=${API_KEY}`)
      .then(res => res.json())
      .then(data => setUnstructureData({
        title0: data.results[0].title,
        summary0: data.results[0].summary,
        image0: data.results[0].image,
        // readyInMinutes0: data.results[0].readyInMinutes,
        // creditsText0: data.results[0].creditsText,
        // // id0: data.results[0].id,
        // cuisine0: data.results[0].cuisines,
        // diet0: data.results[0].diets,
  //       // analyzedInstructions0: data.results[0].analyzedInstructions,
  //       title1: data.results[1].title,
  //       summary1: data.results[1].summary,
  //       image1: data.results[1].image,
  //       readyInMinutes1: data.results[1].readyInMinutes,
  //       creditsText1: data.results[1].creditsText,
  //       // id1: data.results[1].id,
  //       cuisine1: data.results[1].cuisines,
  //       diet1: data.results[1].diets,
        // analyzedInstructions1: data.results[1].analyzedInstructions,
        // title2: data.results[2].title,
        // summary2: data.results[2].summary,
        // image2: data.results[2].image,
        // readyInMinutes2: data.results[2].readyInMinutes,
        // creditsText2: data.results[2].creditsText,
        // // id2: data.results[2].id,
        // cuisine2: data.results[2].cuisines,
        // diet2: data.results[2].diets,
        // analyzedInstructions2: data.results[2].analyzedInstructions,
        // title3: data.results[3].title,
        // summary3: data.results[3].summary,
        // image3: data.results[3].image,
        // readyInMinutes3: data.results[3].readyInMinutes,
        // creditsText3: data.results[3].creditsText,
        // // id3: data.results[3].id,
        // cuisine3: data.results[3].cuisines,
        // diet3: data.results[3].diets,
        // analyzedInstructions3: data.results[3].analyzedInstructions,
        // title4: data.results[4].title,
        // summary4: data.results[4].summary,
        // image4: data.results[4].image,
        // readyInMinutes4: data.results[4].readyInMinutes,
        // creditsText4: data.results[4].creditsText,
        // // id4: data.results[4].id,
        // cuisine4: data.results[4].cuisines,
        // diet4: data.results[4].diets,
        // analyzedInstructions4: data.results[4].analyzedInstructions,
        // title5: data.results[5].title,
        // summary5: data.results[5].summary,
        // image5: data.results[5].image,
        // readyInMinutes5: data.results[5].readyInMinutes,
        // creditsText5: data.results[5].creditsText,
        // // id5: data.results[5].id,
        // cuisine5: data.results[5].cuisines,
        // diet5: data.results[5].diets,
        // analyzedInstructions5: data.results[5].analyzedInstructions,
        // title6: data.results[6].title,
        // summary6: data.results[6].summary,
        // image6: data.results[6].image,
        // readyInMinutes6: data.results[6].readyInMinutes,
        // creditsText6: data.results[6].creditsText,
        // // id6: data.results[6].id,
        // cuisine6: data.results[6].cuisines,
        // diet6: data.results[6].diets,
        // analyzedInstructions6: data.results[6].analyzedInstructions,
        // title7: data.results[7].title,
        // summary7: data.results[7].summary,
        // image7: data.results[7].image,
        // readyInMinutes7: data.results[7].readyInMinutes,
        // creditsText7: data.results[7].creditsText,
        // // id7: data.results[7].id,
        // cuisine7: data.results[7].cuisines,
        // diet7: data.results[7].diets,
        // analyzedInstructions7: data.results[7].analyzedInstructions,
        // title8: data.results[8].title,
        // summary8: data.results[8].summary,
        // image8: data.results[8].image,
        // readyInMinutes8: data.results[8].readyInMinutes,
        // creditsText8: data.results[8].creditsText,
        // // id8: data.results[8].id,
        // cuisine8: data.results[8].cuisines,
        // diet8: data.results[8].diets,
        // analyzedInstructions8: data.results[8].analyzedInstructions,
        // title9: data.results[9].title,
        // summary9: data.results[9].summary,
        // image9: data.results[9].image,
        // readyInMinutes9: data.results[9].readyInMinutes,
        // creditsText9: data.results[9].creditsText,
        // // id9: data.results[9].id,
        // cuisine9: data.results[9].cuisines,
        // diet9: data.results[9].diets,
        // analyzedInstructions9: data.results[9].analyzedInstructions,
    }))
    
      addPost1()
      // addPost2()
      // addPost3()
  //     // addPost4()
  //     // addPost5()
  //     // addPost6()
  //     // addPost7()
  //     // addPost8()
  //     // addPost9()
  //     // addPost10()

  }, [])
  

  async function addPost1(){
    let Post = new Parse.Object('Post')

    try {
    Post.set('title', `${unstructureData.title0}`)
    Post.set('image', `${unstructureData.image0}`)
    // Post.set('cuisine', `${unstructureData.cuisine0}`)
    Post.set('summary', `${unstructureData.summary0}`)
    // Post.set('creditsText', `${unstructureData.creditsText0}`)
    // Post.set('diet', `${unstructureData.diet0}`)
    // Post.set('readyInMinutes', `${unstructureData.readyInMinutes0}`)
    // Post.set('analyzedInstructions', `${unstructureData.analyzedInstructions0}`)
    // Post.set('id', unstructureData.id0)
      await Post.save()
      alert("Success, post created")
      return true
    }catch(error) {
      alert(`Error! ${error.message}`);
      return false; 
    }
  }

  // async function addPost2(){
  //   try {
  //   let Post = new Parse.Object('Post')
  //   Post.set('title', `${unstructureData.title1}`)
  //   Post.set('image', `${unstructureData.image1}`)
  //   Post.set('cuisine', `${unstructureData.cuisine1}`)
  //   Post.set('summary', `${unstructureData.summary1}`)
  //   Post.set('creditsText', `${unstructureData.creditsText1}`)
  //   Post.set('diet', `${unstructureData.diet1}`)
  //   Post.set('readyInMinutes', `${unstructureData.readyInMinutes1}`)
  //   Post.set('analyzedInstructions', `${unstructureData.analyzedInstructions1}`)
  //   // Post.set('id', unstructureData.id1)
  //     await Post.save()
  //     alert("Success, post created")
  //     return true
  //   }catch(error) {
  //     alert(`Error! ${error.message}`);
  //     return false; 
  //   }
  // }

  // async function addPost3(){
  //  try {
  //   let Post = new Parse.Object('Post')
  //   Post.set('title', `${unstructureData.title2}`)
  //   Post.set('image', `${unstructureData.image2}`)
  //   Post.set('cuisine', `${unstructureData.cuisine2}`)
  //   Post.set('summary', `${unstructureData.summary2}`)
  //   Post.set('creditsText', `${unstructureData.creditsText2}`)
  //   Post.set('diet', `${unstructureData.title2}`)
  //   Post.set('readyInMinutes', `${unstructureData.readyInMinutes2}`)
  //   // Post.set('analyzedInstructions', `${unstructureData.analyzedInstructions2}`)
  //   // Post.set('id', unstructureData.id0)
    
    
  //     await Post.save()
  //     alert("Success, post created")
  //     return true
  //   }catch(error) {
  //     alert(`Error! ${error.message}`);
  //     return false; 
  //   }
  // }
  

  // async function addPost4(){
  //   try {
  //   let Post = new Parse.Object('Post')
  //   Post.set('title', `${unstructureData.title3}`)
  //   Post.set('image', `${unstructureData.image3}`)
  //   Post.set('cuisine', `${unstructureData.cuisine3}`)
  //   Post.set('summary', `${unstructureData.summary3}`)
  //   Post.set('creditsText', `${unstructureData.creditsText3}`)
  //   Post.set('diet', `${unstructureData.title3}`)
  //   Post.set('readyInMinutes', `${unstructureData.readyInMinutes3}`)
  //   // Post.set('analyzedInstructions', `${unstructureData.analyzedInstructions3}`)
  //   // Post.set('id', unstructureData.id0)
    
    
  //     await Post.save()
  //     alert("Success, post created")
  //     return true
  //   }catch(error) {
  //     alert(`Error! ${error.message}`);
  //     return false; 
  //   }
  // }


  // async function addPost5(){
  //   try {
  //   let Post = new Parse.Object('Post')
  //   Post.set('title', `${unstructureData.title4}`)
  //   Post.set('image', `${unstructureData.image4}`)
  //   Post.set('cuisine', `${unstructureData.cuisine4}`)
  //   Post.set('summary', `${unstructureData.summary4}`)
  //   Post.set('creditsText', `${unstructureData.creditsText4}`)
  //   Post.set('diet', `${unstructureData.title4}`)
  //   Post.set('readyInMinutes', `${unstructureData.readyInMinutes4}`)
  //   Post.set('analyzedInstructions', `${unstructureData.analyzedInstructions4}`)
  //   // Post.set('id', unstructureData.id0)
    
    
  //     await Post.save()
  //     alert("Success, post created")
  //     return true
  //   }catch(error) {
  //     alert(`Error! ${error.message}`);
  //     return false; 
  //   }
  // }

  // async function addPost6(){
  //   try {
  //   let Post = new Parse.Object('Post')
  //   Post.set('title', `${unstructureData.title5}`)
  //   Post.set('image', `${unstructureData.image5}`)
  //   Post.set('cuisine', `${unstructureData.cuisine5}`)
  //   Post.set('summary', `${unstructureData.summary5}`)
  //   Post.set('creditsText', `${unstructureData.creditsText5}`)
  //   Post.set('diet', `${unstructureData.title5}`)
  //   Post.set('readyInMinutes', `${unstructureData.readyInMinutes5}`)
  //   Post.set('analyzedInstructions', `${unstructureData.analyzedInstructions5}`)
    
  //     await Post.save()
  //     alert("Success, post created")
  //     return true
  //   }catch(error) {
  //     alert(`Error! ${error.message}`);
  //     return false; 
  //   }
  // }


  // async function addPost7(){
  //   try {
  //   let Post = new Parse.Object('Post')
  //   Post.set('title', `${unstructureData.title6}`)
  //   Post.set('image', `${unstructureData.image6}`)
  //   Post.set('cuisine', `${unstructureData.cuisine6}`)
  //   Post.set('summary', `${unstructureData.summary6}`)
  //   Post.set('creditsText', `${unstructureData.creditsText6}`)
  //   Post.set('diet', `${unstructureData.title6}`)
  //   Post.set('readyInMinutes', `${unstructureData.readyInMinutes6}`)
  //   Post.set('analyzedInstructions', `${unstructureData.analyzedInstructions6}`)
    
  //     await Post.save()
  //     alert("Success, post created")
  //     return true
  //   }catch(error) {
  //     alert(`Error! ${error.message}`);
  //     return false; 
  //   }
  // }


  // async function addPost8(){
  //   try {
  //   let Post = new Parse.Object('Post')
  //   Post.set('title', `${unstructureData.title7}`)
  //   Post.set('image', `${unstructureData.image7}`)
  //   Post.set('cuisine', `${unstructureData.cuisine7}`)
  //   Post.set('summary', `${unstructureData.summary7}`)
  //   Post.set('creditsText', `${unstructureData.creditsText7}`)
  //   Post.set('diet', `${unstructureData.title7}`)
  //   Post.set('readyInMinutes', `${unstructureData.readyInMinutes7}`)
  //   Post.set('analyzedInstructions', `${unstructureData.analyzedInstructions7}`)
    
  //     await Post.save()
  //     alert("Success, post created")
  //     return true
  //   }catch(error) {
  //     alert(`Error! ${error.message}`);
  //     return false; 
  //   }
  // }



  // async function addPost9(){
  //   try {
  //   let Post = new Parse.Object('Post')
  //   Post.set('title', `${unstructureData.title8}`)
  //   Post.set('image', `${unstructureData.image8}`)
  //   Post.set('cuisine', `${unstructureData.cuisine8}`)
  //   Post.set('summary', `${unstructureData.summary8}`)
  //   Post.set('creditsText', `${unstructureData.creditsText8}`)
  //   Post.set('diet', `${unstructureData.title8}`)
  //   Post.set('readyInMinutes', `${unstructureData.readyInMinutes8}`)
  //   Post.set('analyzedInstructions', `${unstructureData.analyzedInstructions8}`)
    
  //     await Post.save()
  //     alert("Success, post created")
  //     return true
  //   }catch(error) {
  //     alert(`Error! ${error.message}`);
  //     return false; 
  //   }
  // }

  // async function addPost10(){
  //   try {
  //   let Post = new Parse.Object('Post')
  //   Post.set('title', `${unstructureData.title9}`)
  //   Post.set('image', `${unstructureData.image9}`)
  //   Post.set('cuisine', `${unstructureData.cuisine9}`)
  //   Post.set('summary', `${unstructureData.summary9}`)
  //   Post.set('creditsText', `${unstructureData.creditsText9}`)
  //   Post.set('diet', `${unstructureData.title9}`)
  //   Post.set('readyInMinutes', `${unstructureData.readyInMinutes9}`)
  //   Post.set('analyzedInstructions', `${unstructureData.analyzedInstructions9}`)
    
  //     await Post.save()
  //     alert("Success, post created")
  //     return true
  //   }catch(error) {
  //     alert(`Error! ${error.message}`);
  //     return false; 
  //   }
  // }

  

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/login'>
            <Navbar />
            <Login />
          </Route>
          <Route path='/admin' component={Admin} />
          <Route path='/posts/:id'>
            <PostDetail />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
 