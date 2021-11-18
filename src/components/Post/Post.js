import React, {useState,useEffect} from 'react'
import Parse from 'parse/dist/parse'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './Post.css'
import seafood from '../../assets/seafood.jpg'

function Post({id}) {
    const [title, setTitle] = useState()
    const [summary, setSummary] = useState()
    const [image, setImage] = useState()
    const [diet, setDiet] = useState()
    const [createdAt, setCreatedAt] = useState()
    const [readyInMinutes, setReadyInMinutes] = useState()
    const [cuisine, setCuisine] = useState()
    const [analyzedInstructions, setAnalyzedInstructions] = useState()
    const [creditsText, setCreditsText] = useState()

    console.log(id);
    useEffect(() => {
        (async function fetchPost() {
            const query = new Parse.Query('Post')
            try {
                const results = await query.find()
                
                const post = await query.get(`${id}`)
                const title = await post.get('title')
                const image = await post.get('image')
                const cuisine = await post.get('cuisine')
                const summary = await post.get('summary')
                const createdAt = await post.get('createdAt')
                const creditsText = await post.get('creditsText')
                const diet = await post.get('diet')
                const readyInMinutes = await post.get('readyInMinutes')
                const analyzedInstructions = await post.get('analyzedInstructions')
                
                const htmlConvertedString = `${summary}`

                const toString = createdAt.toString()
                console.log(toString);
                const slicedString = toString.slice(0, 21)
                console.log(slicedString);

                setTitle(title)
                setImage(image)
                setCuisine(cuisine)
                setSummary(htmlConvertedString)
                setCreditsText(creditsText)
                setDiet(diet)
                setCreatedAt(slicedString)
                setReadyInMinutes(readyInMinutes)
                setAnalyzedInstructions([analyzedInstructions])
            } catch(error) {
                console.log('Fallo rey' + error.message);
            }
        })()    
    }, [id])
    // console.log(createdAt);
    return (
        <>
            <div className="post__container">
                <div className="top-post__container">
                    <img src={`${image}`} alt="top post img" className="top-post__img" />
                    <div className="top-post__text">
                        <a href="" className="top-post__link">{cuisine}</a>
                        <h2 className="top-post__title">{title}</h2>
                        <div className="top-post__p">
                            <p>
                                { ReactHtmlParser(summary)}
                            </p>
                        </div>
                        <div className="top-post__p">
                            <p>
                                {readyInMinutes}
                            </p>
                            <p className="hola">{diet}</p>
                            <p>Created: {createdAt}</p>
                        </div>
                        <div className="top-post__author">
                            <span>By {creditsText}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Post}
