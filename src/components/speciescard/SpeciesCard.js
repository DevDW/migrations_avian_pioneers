import React from 'react'

import './SpeciesCard.css'

const SpeciesCard = ( props ) => {
    return (
        <div onClick={() => props.onSpeciesSelect(props.species)} className="card shadow-sm p-3 mb-5 bg-white rounded border border-dark" style={{width: '18rem'}}>
            <img 
                src={ props.species.speciesImg } 
                className="card-img-top img-thumbnail img-fluid border border-secondary" 
                alt={ props.species.speciesName }
            />

            <div className="card-body">
                <h5 className="card-title">{ props.species.speciesName }</h5>
                <p className="card-text">{ props.species.speciesDesc }</p>
            </div>
        </div>
    )
}

export default SpeciesCard;