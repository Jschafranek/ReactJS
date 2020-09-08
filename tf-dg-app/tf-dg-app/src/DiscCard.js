import React from 'react'
import './DiscCard.css'

function DiscCard() {
    return (
        <div className="discCard">
            
            <img src="https://infinitediscs.com/Inf_Uploads/Disc_Images/77b2c4a3-1887-4966-bc35-5b5b4a436ba1Roc-DX.jpg"/>
            <h1>DX Roc</h1>

            <h2>The Innova Roc is one of the most popular discs in the world. Players of all skill levels have sworn by this disc and frequently have more than one Roc in their bag.</h2>

            <p className="discCard__stats">
                <h4>Innova Mid-Range 4 4 0 3</h4>
            </p>

            <a href="http::/localhost:3000">Click here for more info..</a>
        </div>
    )
}

export default DiscCard
