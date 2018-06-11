import React, { Component } from 'react';
import { v4 } from 'uuid';
import HeroesList from './HeroesList';
import HeroesFilter from './HeroesFilter';
import CreateHeroe from './CreateHeroe';
import SquadList from './SquadList';
import SavedSquads from './SquadHeroes';
import Panel from './shared/Panel/index';
import Button from './shared/Button/Button';
import initialHeroes from '../heroes';
import { getVisibleHeroes } from './utils/selector';
import { getsquadHeroes } from './utils/squadHeroes';
// import { selecrotSquad } from './utils/selecrotSquad';
import styles from'./App.css';

 export default class App extends Component {
   state = {
     heroes: [ ...initialHeroes],
     filter: '',
     squads: [],
     savedSquads: [],
     strength: 0,
     intelligence: 0,
     speed: 0,
   }

   getTotalStats = arrayOfSquads => {
    const totalStats = arrayOfSquads.reduce((total, stat) =>
      total.value + stat.value, 
      { value: 0}
      );
    return totalStats;
    
  };
  
  // totalValueStats = {
  //   // strength: this.getTotalStats(this.heroes.strength),
  //   speed: this.getTotalStats(this.squadHeroes.speed),
  //   // intelligence: this.getTotalStats(this.intelligence),
  //   // speed: this.getTotalStats(this.squads),
  // }

   createHero = fields => {
     console.log(fields);
      this.setState(state => ({
        heroes: [{ id: v4(), ...fields }, ...state.heroes],
      }));
    };
  
   deleteHero = id => {
     this.setState(state => ({
       heroes: state.heroes.filter(hero => hero.id !== id)
     }));
   };

   addInfoHero = id => {
    this.setState(state => ({
      heroes: state.heroes.filter(hero => hero.id === id)
    }));
   };
 
   addToSquad =  id  => {
    this.setState({
      squads: [...this.state.squads, id]
    }); 
  };

  deleteFromSquad = id => {
    this.setState(state => ({
    //  heroes: state.heroes.filter(hero => hero.id !== id),
     squads: state.squads.filter(squad => squad !== id)
    }));
  };

   handleFilterChange = str => {
    this.setState({ filter: str})
   };
  
  //  ???
   handleSaveSquad = (heroes, squads) => {
    this.setState(state =>({
      savedSquads: state.heroes.filter(hero => hero.id === squads)

    }));
    // 
   };

   handleResetEditor = () => {
    this.setState(state => ({
      squads: state.squads.splice()
    }));
   }; 

  render() {
    console.log(`state.heroes`, this.state.heroes);
    const { heroes, filter, squads, savedSquads } = this.state;
    const visibleHeroes = getVisibleHeroes(heroes, filter);
    const squadHeroes = getsquadHeroes(heroes, squads);
    // const readySquad=selecrotSquad(heroes, squads)
    console.log(`savedSquads:`,  this.state.savedSquads);
    console.log(`state.squads`, this.state.squads);

    return (
      <div className={styles.App}>
        <header className={styles.App_header}>
          <h1>Super Squad</h1>
        </header>
        <div className={styles.App_wrap}> 
        <Panel>
          <h2>Create Heroe</h2>
          <CreateHeroe onFormSubmit={this.createHero} />
        </Panel>
        <Panel>
          <h2>Heroes</h2>
          <HeroesFilter onFilterChange={this.handleFilterChange} filter={filter}/>
          <HeroesList 
            heroes={visibleHeroes}
            onAddHero={this.addToSquad}
            onDeleteHero={this.deleteHero}
            onInfoHero={this.addInfoHero}
          />
        </ Panel>
        <Panel>
          <h2>Squad Heroes</h2>
          <Button onClick={this.handleSaveSquad} text='Save Squad'/>
          <Button onClick={this.handleResetEditor} text='Reset Squad'/>
          <div>
                {/* <p>strength: {this.strength}</p> */}
                {/* <p>intelligence: {0}</p> */}
                <p>speed: {this.getTotalStats(squadHeroes.speed)}</p>
          </div>
          <SquadList
              heroes={squadHeroes}
              onInfoHero={this.addInfoHero}
              onDeleteFromSquad={this.deleteFromSquad}
          />
        </ Panel>
        <Panel>
          <h2>Saved Squads</h2> 
          {/* <p><span>Heroes</span>   <span>Stats</span></p> */}
          <SavedSquads 
            savedSquads = {savedSquads}
            onDeletesquad={this.deletesquad} 
          />
        </ Panel>
        </div>
      </div>
    );
  }
};

