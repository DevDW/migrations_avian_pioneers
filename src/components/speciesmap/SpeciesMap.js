import React from 'react';

import './SpeciesMap.css';

// import d3.js

class SpeciesMap extends React.Component {
    // function to retrieve migration data

    // function to create d3 map based on migration data

    render() {
        if (!this.props.speciesSelected) {
            return (
                <div className="map-section">
                    Click a card above to generate a migration map for that species.
                </div>
            )
        }

        return (
            <div className="map-section">
                <h2>{ this.props.speciesSelected.speciesName }: Migration Map</h2>

                <canvas></canvas>
            </div>
        )
    }
}

export default SpeciesMap;