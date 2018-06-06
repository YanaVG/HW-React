import React, { Component } from 'react';
import { v4 } from 'uuid';
import HeroesList from './HeroesList';
import HeroesFilter from './HeroesFilter';
import CreateHeroe from './CreateHeroe';
import SquardList from './SquardList';
// import SavedSquards from './SavedSquards';
import Panel from './shared/Panel/index';
// import ChooseCapacity from './ChooseCapacity';
import Button from './shared/Button/Button';
import initialHeroes from '../heroes';
import { getVisibleHeroes } from './utils/selector';
import styles from'./App.css';

 export default class App extends Component {
   state = {
     heroes: [ ...initialHeroes],
     filter: '',
     squads: [],
     SavedSquards: [],
   }

   getSquardHeroes = (heroes, squads ) => {
    heroes.filter(heroe => heroe.id.includes(squads));
     return heroes;
    }; 
 
   createHeroe = fields => {
     console.log(fields);
      this.setState(state => ({
        heroes: [{ id: v4(), ...fields }, ...state.heroes],
      }));
    };
  
   deleteHeroe = id => {
     this.setState(state => ({
       heroes: state.heroes.filter(heroe => heroe.id !== id)
     }));
   };

   addInfoHeroe = id => {
    this.setState(state => ({
      heroes: state.heroes.filter(heroe => heroe.id === id)
    }));
    // return this.state.heroe;
   };
 
   addToSquard =  id  => {
    this.setState({
      squads: [...this.state.squads, id]
    }); 
  };

   handleFilterChange = str => {
    this.setState({ filter: str})
   };

  render() {
    // console.log(`state.heroes`, this.state.heroes);
    const { heroes, filter, squads } = this.state;
    const visibleHeroes = getVisibleHeroes(heroes, filter);
    // console.log(`visibleHeroes`, visibleHeroes);
    // console.log(filter);
    console.log(`state.squads`, this.state.squads);
    return (
      <div className={styles.App}>
        <header className={styles.App_header}>
          <h1>Super Squard</h1>
        </header>
        <div className={styles.App_wrap}> 
        <Panel>
          <h2>Create Heroe</h2>
          <CreateHeroe onFormSubmit={this.createHeroe} />
        </Panel>
        <Panel>
          <h2>Heroes</h2>
          <HeroesFilter onFilterChange={this.handleFilterChange} filter={filter}/>
          <HeroesList 
            heroes={visibleHeroes}
          // heroe={heroe} 
            onAddHeroe={this.addToSquard}
            onDeleteHeroe={this.deleteHeroe}
            onInfoHeroe={this.addInfoHeroe}
          />
        </ Panel>
        <Panel>
          <h2>Squad Heroes</h2>
          <Button text='Save Squard'/>
          <Button text='Reset Squard'/>
          <SquardList
            squads={squads}
            onGetSquadsHeroes ={this.getSquardHeroes}
            // onAddToSquad={this.addToSquard}
            onDeleteHeroe={this.deleteHeroe}
          />
        </ Panel>
        <Panel>
          <h2>Saved Squards</h2>
          {/* <SavedSquards 
            squads = {squads}
            onDeleteSquard={this.deleteSquard} 
          /> */}
        </ Panel>
        </div>
      </div>
    );
  }
};

