import React from 'react'
import './SmallPosts.css'
import sampleImg from '../../assets/seafood.jpg'

function SmallPosts() {
    return (
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
    )
}

export {SmallPosts}
