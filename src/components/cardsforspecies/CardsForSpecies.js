import React from 'react';
import SpeciesCard from '../speciescard/SpeciesCard';

import './CardsForSpecies.css';

const CardsForSpecies = ( props ) => {
    const renderedList = props.species.map((indivSpecies) => {
        return <SpeciesCard 
                    onSpeciesSelect={ props.onSpeciesSelect }
                    species={ indivSpecies }
                />
    })

    return <div className="card-deck species-cards">{ renderedList }</div>
}

export default CardsForSpecies;