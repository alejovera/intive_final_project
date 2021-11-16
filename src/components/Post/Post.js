import React from 'react'
import './Post.css'
import seafood from '../../assets/seafood.jpg'
function Post() {
    return (
        <>
            <div className="post__container">
                <div className="top-post__container">
                    <img src={seafood} alt="top post img" className="top-post__img" />
                    <div className="top-post__text">
                        <a href="" className="top-post__link">Seafood</a>
                        <h2 className="top-post__title">Mariscos, cangrejos, langosta</h2>
                        <div className="top-post__p">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt temporibus quam ab, earum iure magni hic velit dignissimos eum itaque voluptatibus vero inventore expedita nesciunt necessitatibus harum quidem quaerat fugiat.
                            </p>
                        </div>
                        <div className="top-post__author">
                            <span>By Reta Thorpy</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Post}
