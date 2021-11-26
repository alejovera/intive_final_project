import React, { useState, useEffect } from 'react'

import { Home } from './pages/Home';
import {Login} from './pages/Login';
import {PostDetail} from './pages/PostDetail';
import { Admin } from './pages/Admin';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Parse, { async } from 'parse/dist/parse'

import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { User } from 'parse';
const PARSE_APPLICATION_ID = 'CgnN9VK98OFafr23qfN2180LjGqeNslAFPnJaYDu';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'mYEzmA83EbCw4EhsFqQA3fqyRmUJ7eJwgVoE3i3u';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


// const API_KEY = 'e97329be8b32403880bf659279fa5ae9';
// const numberOfPosts = 10

function App() {
    const [fetchedData, setFetchedData] = useState()
    const [counter, setCounter] = useState(0)

    const controller = new AbortController()


  useEffect(() => {
    fetchData()
    if(fetchedData !== undefined) {
        createPost1()
    }
    // createPost2()
    // createPost3()
    // createPost4()
    // createPost5()
    // createPost6()
  }, [])


    const fetchData = async () => {
        const response = await fetch('/api/posts', {signal: controller.signal})
        const data = await response.json()
        const arrayResult = data.results;
        setCounter(prevCount => prevCount + 1)
        return setFetchedData(arrayResult)
        // fetch('/api/posts')
        //     .then(res => res.json())
        //     .then(res => {
        //         setCounter(prevCount => prevCount + 1)
        //         console.log(counter);
        //         const arrayResult = res.results;
        //         return setfetchedData(arrayResult)
        //     });
    }
    // if (counter <= 6) {
    //     fetchData()
    // } else {
    //     return false
    // }
    
    

    const createPost1 = async function() {
        let Post = new Parse.Object('Post')
        Post.set('title', `${fetchedData[0].title}`)
        Post.set('summary', `${fetchedData[0].summary}`)
        Post.set('image', `${fetchedData[0].image}`)
        Post.set('creditsText', `${fetchedData[0].creditsText}`)
        Post.set('cuisine', `${fetchedData[0].cuisines}`)
        Post.set('diets', `${fetchedData[0].diets}`)
        Post.set('readyInMinutes', `${fetchedData[0].readyInMinutes}`)

        try {
            await Post.save()
            alert('Post saved')
        } catch (error) {
            alert('Post error')
            console.log(error.message);
        }
    }


    const createPost2 = async function() {

        let Post = new Parse.Object('Post')
        Post.set('title', `${fetchedData[1].title}`)
        Post.set('readyInMinutes', `${fetchedData[1].readyInMinutes}`)
        Post.set('summary', `${fetchedData[1].summary}`)
        Post.set('image', `${fetchedData[1].image}`)
        Post.set('creditsText', `${fetchedData[1].creditsText}`)
        Post.set('cuisine', `${fetchedData[1].cuisines}`)
        Post.set('diets', `${fetchedData[1].diets}`)

        try {
        await Post.save()
        } catch (error) {
        console.log(error.message);
        }
    }


    const createPost3 = async function() {

        let Post = new Parse.Object('Post')
        Post.set('title', `${fetchedData[2].title}`)
        Post.set('readyInMinutes', `${fetchedData[2].readyInMinutes}`)
        Post.set('summary', `${fetchedData[2].summary}`)
        Post.set('image', `${fetchedData[2].image}`)
        Post.set('creditsText', `${fetchedData[2].creditsText}`)
        Post.set('cuisine', `${fetchedData[2].cuisines}`)
        Post.set('diets', `${fetchedData[2].diets}`)
        try {
            await Post.save()
        } catch (error) {
            console.log(error.message);
        }
    }

    const createPost4 = async function() {

        let Post = new Parse.Object('Post')
        Post.set('title', `${fetchedData[3].title}`)
        Post.set('readyInMinutes', `${fetchedData[3].readyInMinutes}`)
        Post.set('summary', `${fetchedData[3].summary}`)
        Post.set('image', `${fetchedData[3].image}`)
        Post.set('creditsText', `${fetchedData[3].creditsText}`)
        Post.set('cuisine', `${fetchedData[3].cuisines}`)
        Post.set('diets', `${fetchedData[3].diets}`)
        try {
            await Post.save()
        } catch (error) {
            console.log(error.message);
        }
    }

    const createPost5 = async function() {

        let Post = new Parse.Object('Post')
        Post.set('title', `${fetchedData[4].title}`)
        Post.set('readyInMinutes', `${fetchedData[4].readyInMinutes}`)
        Post.set('summary', `${fetchedData[4].summary}`)
        Post.set('image', `${fetchedData[4].image}`)
        Post.set('creditsText', `${fetchedData[4].creditsText}`)
        Post.set('cuisine', `${fetchedData[4].cuisines}`)
        Post.set('diets', `${fetchedData[4].diets}`)
        try {
            await Post.save()
        } catch (error) {
            console.log(error.message);
        }
    }

    const createPost6 = async function() {

        let Post = new Parse.Object('Post')
        Post.set('title', `${fetchedData[5].title}`)
        Post.set('readyInMinutes', `${fetchedData[5].readyInMinutes}`)
        Post.set('summary', `${fetchedData[5].summary}`)
        Post.set('image', `${fetchedData[5].image}`)
        Post.set('creditsText', `${fetchedData[5].creditsText}`)
        Post.set('cuisine', `${fetchedData[5].cuisines}`)
        Post.set('diets', `${fetchedData[5].diets}`)
        try {
            await Post.save()
        } catch (error) {
            console.log(error.message);
        }
    }



    if (fetchedData) {
        
        createPost1()
        createPost2()

        // controller.abort()

        
        
        createPost3()
        createPost4()
        createPost5()
        createPost6()
    //   setCounter(counter++)
    } else {
        return null
    }

  

  


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
 