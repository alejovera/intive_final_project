import React, {useEffect, useState} from 'react'
import Parse from 'parse/dist/parse'
import {useParams} from 'react-router-dom'

function PostDetail() {
    let {id} = useParams()

    const [title, setTitle] = useState()
    const [summary, setSummary] = useState()
    const [image, setImage] = useState()
    const [diet, setDiet] = useState()
    const [readyInMinutes, setReadyInMinutes] = useState()
    const [cuisine, setCuisine] = useState()
    const [analyzedInstructions, setAnalyzedInstructions] = useState()
    const [creditsText, setCreditsText] = useState()


    console.log(image, diet, readyInMinutes, cuisine, analyzedInstructions, creditsText);


    useEffect(() => {
        fetchPost()
    }, [])

    async function fetchPost() {
        const query = new Parse.Query('Post')
        try {
            const results = await query.find()
            
            const post = await query.get(`${id}`)
            const title = await post.get('title')
            const image = await post.get('image')
            const cuisine = await post.get('cuisine')
            const summary = await post.get('summary')
            const creditsText = await post.get('creditsText')
            const diet = await post.get('diet')
            const readyInMinutes = await post.get('readyInMinutes')
            const analyzedInstructions = await post.get('analyzedInstructions')
            setTitle(title)
            setImage(image)
            setCuisine(cuisine)
            setSummary(summary)
            setCreditsText(creditsText)
            setDiet(diet)
            setReadyInMinutes(readyInMinutes)
            setAnalyzedInstructions([analyzedInstructions])
            console.log(analyzedInstructions[0].steps[1].step);
        } catch(error) {
            console.log('Fallo rey' + error.message);
        }
        // return {post, title, image, cuisine, analyzedInstructions, diet, summary, creditsText, readyInMinutes}
    }
    
    return (
        <div>
            <h1>{title}</h1>
            <p>{cuisine}</p>
            <p>{diet}</p>
            <p>{readyInMinutes}</p>
            <p>{summary}</p>
            {/* <p>{analyzedInstructions.steps[1]}</p> */}
            <p>{creditsText}</p>
            <img src={image} alt="" />
        </div>
    )
}

export {PostDetail}
