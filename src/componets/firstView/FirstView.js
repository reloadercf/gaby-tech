import React from 'react'
import texture from '../../assets/greenTexture.png'

const FirstView = () => {
    return (
        <>
        <div className="firstView">
            <div className="description">
                <h1>Conoce los proyectos que hacen posible construir una sociedad carbono neutra.</h1>
            </div>

            <div className="btnAction">
                <button>Conoce más</button>
            </div> 
        </div>

        <div className="line">
            <div>
                <img src={texture}></img>
            </div>
        </div> 
        </>
    )
}

export default FirstView
