import React from 'react';
import Header from './header/Header';
import CardsForSpecies from './cardsforspecies/CardsForSpecies';
import SpeciesMap from './speciesmap/SpeciesMap';
import ProjectBackground from './backgroundonproject/ProjectBackground';
import AboutTheDev from './aboutthedev/AboutTheDev';

import './header/Header.css';

// once user has cycled through all species, throw a Toast thanking them for checking out the project

// make it look good on mobile also

class App extends React.Component {
  state = {
      speciesList: [
        {speciesName: 'Blackburnian Warbler', 
        speciesDesc: 'Placeholder',
        speciesImg: 'blackburnian_warbler_thumbnail.jpg'},

        {speciesName: 'Baltimore Oriole', 
        speciesDesc: 'Placeholder',
        speciesImg: 'baltimore_oriole_thumbnail.jpg'},

        {speciesName: 'Black-throated Blue Warbler', 
        speciesDesc: 'Placeholder',
        speciesImg: 'black_throated_blue_warbler_thumbnail.jpg'},

        {speciesName: 'Sandhill Crane', 
        speciesDesc: 'Placeholder', 
        speciesImg: 'sandhill_crane_thumbnail.jpg'},

        {speciesName: 'American Redstart', 
        speciesDesc: 'Placeholder', 
        speciesImg: 'american_redstart_thumbnail.jpg'}
      ],

      speciesSelected: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  onSpeciesSelect = (species) => {
    this.setState({ speciesSelected: species })
  }

  render() {
    return (
      <div className="App" style={{paddingBottom:'5%'}}>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-">
              <CardsForSpecies 
                onSpeciesSelect = { this.onSpeciesSelect }
                species = { this.state.speciesList }
              />
            </div>
          </div>
        </div>
        <div className="">
          <SpeciesMap 
            speciesSelected = { this.state.speciesSelected }
          />
        </div>
        <div className="">
          <ProjectBackground />
        </div>
        <div className="">
          <AboutTheDev />
        </div>
      </div>
    );
  }
}

export default App;