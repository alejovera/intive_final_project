import React, { useState, useEffect } from 'react'

import { Home } from './pages/Home';
import {Login} from './pages/Login';
import {PostDetail} from './pages/PostDetail';
import { Admin } from './pages/Admin';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Parse from 'parse/dist/parse'

import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { User } from 'parse';
const PARSE_APPLICATION_ID = 'ADz4kDBwnigZxfluAwoz50e67XCFEDuwqqKEVlFn';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = '18bNTn0q3tpWR2lagfTBNkcqQhN1wdTW4BSz8lOl';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


const API_KEY = 'e97329be8b32403880bf659279fa5ae9';
const numberOfPosts = 10

function App() {
    const [initialState, setInitialState] = useState()


  useEffect(() => {

    fetch('/api/posts')
        .then(res => res.json())
        .then(res => {
            const arrayResult = res.results;
            return setInitialState(arrayResult)
        });

    

    createPost1()
    // createPost2()
    // createPost3()
    // createPost4()
    // createPost5()
    // createPost6()
  }, [initialState])


    console.log(initialState);

  const createPost1 = async function() {
    // const dataResults = initialState.results;

    let Post = new Parse.Object('Post')
    Post.set('title', `${initialState[0].title}`)
    Post.set('summary', `${initialState[0].summary}`)
    Post.set('image', `${initialState[0].image}`)
    Post.set('creditsText', `${initialState[0].creditsText}`)
    Post.set('cuisine', `${initialState[0].cuisines}`)
    Post.set('diets', `${initialState[0].diets}`)
    Post.set('readyInMinutes', `${initialState[0].readyInMinutes}`)

    try {
      await Post.save()
    } catch (error) {
      console.log(error.message);
    }
  }

  const createPost2 = async function() {
    const dataResults = initialState.results;

    let Post = new Parse.Object('Post')
    Post.set('title', `${dataResults[1].title}`)
    Post.set('readyInMinutes', `${dataResults[1].readyInMinutes}`)
    Post.set('summary', `${dataResults[1].summary}`)
    Post.set('image', `${dataResults[1].image}`)
    Post.set('creditsText', `${dataResults[1].creditsText}`)
    Post.set('cuisine', `${dataResults[1].cuisines}`)
    Post.set('diets', `${dataResults[1].diets}`)

    try {
      await Post.save()
    } catch (error) {
      console.log(error.message);
    }
  }


    const createPost3 = async function() {
        const dataResults = initialState.results;

        let Post = new Parse.Object('Post')
        Post.set('title', `${dataResults[2].title}`)
        Post.set('readyInMinutes', `${dataResults[2].readyInMinutes}`)
        Post.set('summary', `${dataResults[2].summary}`)
        Post.set('image', `${dataResults[2].image}`)
        Post.set('creditsText', `${dataResults[2].creditsText}`)
        Post.set('cuisine', `${dataResults[2].cuisines}`)
        Post.set('diets', `${dataResults[2].diets}`)
        try {
            await Post.save()
        } catch (error) {
            console.log(error.message);
        }
    }

    const createPost4 = async function() {
        const dataResults = initialState.results;

        let Post = new Parse.Object('Post')
        Post.set('title', `${dataResults[3].title}`)
        Post.set('readyInMinutes', `${dataResults[3].readyInMinutes}`)
        Post.set('summary', `${dataResults[3].summary}`)
        Post.set('image', `${dataResults[3].image}`)
        Post.set('creditsText', `${dataResults[3].creditsText}`)
        Post.set('cuisine', `${dataResults[3].cuisines}`)
        Post.set('diets', `${dataResults[3].diets}`)
        try {
            await Post.save()
        } catch (error) {
            console.log(error.message);
        }
    }

    const createPost5 = async function() {
        const dataResults = initialState.results;

        let Post = new Parse.Object('Post')
        Post.set('title', `${dataResults[4].title}`)
        Post.set('readyInMinutes', `${dataResults[4].readyInMinutes}`)
        Post.set('summary', `${dataResults[4].summary}`)
        Post.set('image', `${dataResults[4].image}`)
        Post.set('creditsText', `${dataResults[4].creditsText}`)
        Post.set('cuisine', `${dataResults[4].cuisines}`)
        Post.set('diets', `${dataResults[4].diets}`)
        try {
            await Post.save()
        } catch (error) {
            console.log(error.message);
        }
    }

    const createPost6 = async function() {
        const dataResults = initialState.results;

        let Post = new Parse.Object('Post')
        Post.set('title', `${dataResults[5].title}`)
        Post.set('readyInMinutes', `${dataResults[5].readyInMinutes}`)
        Post.set('summary', `${dataResults[5].summary}`)
        Post.set('image', `${dataResults[5].image}`)
        Post.set('creditsText', `${dataResults[5].creditsText}`)
        Post.set('cuisine', `${dataResults[5].cuisines}`)
        Post.set('diets', `${dataResults[5].diets}`)
        try {
            await Post.save()
        } catch (error) {
            console.log(error.message);
        }
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
 