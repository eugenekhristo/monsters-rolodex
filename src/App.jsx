import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

export class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(blob => blob.json())
      .then(data => this.setState({ monsters: data }));
  }

  handleOnChange = ({ target }) => {
    this.setState({ searchField: target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          hanldeOnChange={this.handleOnChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
