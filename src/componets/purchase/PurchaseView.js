import React, { useState, useEffect, Fragment } from 'react'


const PurchaseView = () => {
    
    const [estados, setEstados] = useState([]);

    async function getData(){
        const res = await fetch("https://www.toroto.mx/api/projects");
        res.json()
        .then(res => {            
            setEstados(res)
        })
            
        .catch(err => console.log(err));
    }

    useEffect(()=>{
        getData();
    },[]);

    
    return (
        <>
            {
                estados.map(item => (
                    <Fragment key={item.location}>
                        <div className="bondInfo">
                            <h1>{item.name}</h1>
                            <h2>{item.offsetPrice}</h2>
                            <h2>{item.totalOffsets} Bonos disponibles</h2>
                        </div>

                        <div className="proyectInfo">
                            <img src={item.img}></img>
                            
                            <div>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </Fragment>
                ))
            }
        </>
    )
}

export default PurchaseView
