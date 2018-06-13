/* eslint-disable */
import React, { Component } from 'react';
import { v4 } from 'uuid';
import HeroesList from './HeroesList';
import HeroesFilter from './HeroesFilter';
import CreateHeroe from './CreateHeroe';
import SquadList from './SquadList';
import SavedSquads from './SavedSquads';
import Panel from './shared/Panel/index';
import Button from './shared/Button/Button';
import SquadStats from './SquadStats';
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
    //  strength: 0,
    //  intelligence: 0,
    //  speed: 0,
   }

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

     squads: state.squads.filter(squad => squad !== id)
    }));
  };

   handleFilterChange = str => {
    this.setState({ filter: str})
   };
  
   handleSaveSquad = (heroes, squads) => {
    this.setState(state =>({
      savedSquads: [{id: v4()}, {heroes: state.heroes.filter(hero => hero.id === squads)}], 
      squads: state.squads.splice()
    }));

   };

   handleResetEditor = () => {
    this.setState(state => ({
      squads: state.squads.splice()
    }));
   }; 
   

  render() {
    const { heroes, filter, squads, savedSquads } = this.state;
    const visibleHeroes = getVisibleHeroes(heroes, filter);
    const squadHeroes = getsquadHeroes(heroes, squads);
    const getTotalStats = arrOfHeroes => {
      const total = arrOfHeroes.reduce(
          (stats, hero) => {
              stats.strength += hero.strength;
              stats.intelligence += hero.intelligence
              stats.speed += hero.speed;
  
              return stats;
          },
          {strength: 0, intelligence: 0, speed: 0}
      );
      return total;
    };
    const totalStats = getTotalStats(squadHeroes);

    // const showTotalStats = arrOfHeroes => {
    //   const total = arrOfHeroes.reduce(
    //       (stats, hero) => {
    //           stats.strength = hero.strength;
    //           stats.intelligence = hero.intelligence
    //           stats.speed = hero.speed;
  
    //           return stats;
    //       },0
          
    //   );
    //   return total;
    // };
    
    // const showStats = getTotalStats(savedSquads);
    // console.log(`showStats`, showStats)
    console.log(`savedSquads:`,  this.state.savedSquads);
    // console.log(`state.squads`, this.state.squads);
    // console.log(`getTotalStats(squadHeroes)`, totalStats)

    return (
      <div className={styles.App}>
        <header className={styles.App_header}>
          <h1>Super Squad</h1>
        </header>
        <div className={styles.App_wrap}> 
        <Panel>
          <h2 className={styles.wrap_header}>Create Heroe</h2>
          <CreateHeroe onFormSubmit={this.createHero} />
        </Panel>
        <Panel>
          <h2 className={styles.wrap_header}>Heroes</h2>
          <HeroesFilter onFilterChange={this.handleFilterChange} filter={filter}/>
          <HeroesList 
            heroes={visibleHeroes}
            onAddHero={this.addToSquad}
            onDeleteHero={this.deleteHero}
            onInfoHero={this.addInfoHero}
          />
        </ Panel>
        <Panel>
          <h2 className={styles.wrap_header}>Squad Heroes</h2>
          <Button onClick={this.handleSaveSquad} text='Save Squad'/>
          <Button onClick={this.handleResetEditor} text='Reset Squad'/>
          <SquadStats 
            totalValue={totalStats}
          />
          <SquadList  
              heroes={squadHeroes}
              onInfoHero={this.addInfoHero}
              onDeleteFromSquad={this.deleteFromSquad}
          />
        </ Panel>
        <Panel>
          <h2 className={styles.wrap_header}>Saved Squads</h2> 
          <SavedSquads 
            savedSquadsOfHeroe = {savedSquads}
            onDeleteSquad={this.deleteFromSquad} 
          />
        </ Panel>
        </div>
      </div>
    );
  }
};

