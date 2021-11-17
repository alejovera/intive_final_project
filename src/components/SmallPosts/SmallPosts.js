import React, {useState, useEffect} from 'react'

import Parse from 'parse/dist/parse';

import './SmallPosts.css'
import sampleImg from '../../assets/seafood.jpg'

function SmallPosts() {

    const [person, setPerson] = useState(null);

  const [post, setPost] = useState(null)

  useEffect(() => {
    fetchPost()
  }, [])


  async function fetchPost() {
    const query = new Parse.Query('Post')
    const Post = await query.first()
    setPost(Post)
  }

  async function addPost() {
    try {
      const Post = new Parse.Object('Post');
      Post.set('title', 'Ceviche Peruano');
      Post.set('info', 'Se hace con limon y pulpo')
      await Post.save()
    } catch (err) {
      console.error(err)
    }
  }

    async function addPerson() {
        try {
          // create a new Parse Object instance
          const Person = new Parse.Object('Person');
          // define the attributes you want for your Object
          Person.set('name', 'John');
          Person.set('email', 'john@back4app.com');
          // save it on Back4App Data Store
          await Person.save();
          alert('Person saved!');
        } catch (error) {
          console.log('Error saving new person: ', error);
        }
      }
    
      async function fetchPerson() {
        // create your Parse Query using the Person Class you've created
        const query = new Parse.Query('Person');
        // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
        query.equalTo('name', 'John');
        // run the query
        const Person = await query.first();
        // access the Parse Object attributes
        console.log('person name: ', Person.get('name'));
        console.log('person email: ', Person.get('email'));
        console.log('person id: ', Person.id);
        setPerson(Person);
      }

    return (
        <>
     <button onClick={addPerson}>Add Person</button>
      <button onClick={fetchPerson}>Fetch Person</button>
      {person !== null && (
        <div>
          <p>{`Name: ${person.get('name')}`}</p>
          <p>{`Email: ${person.get('email')}`}</p>
        </div>
      )}

        <div className="small-post__container">
            <img src={sampleImg} alt="" className="small-post__img" />
            <div className="small-post__text">
                <a href="" className="top-post__link">Seafood</a>
                <h3 className="small-post__title">Helmut Lang celebrates taxi drivers worldwide in latest campaign</h3>
                <div className="top-post__author">
                    <span>By Reta Thorpy</span>
                </div>
            </div>
        </div>
        </>
    )
}

export {SmallPosts}
