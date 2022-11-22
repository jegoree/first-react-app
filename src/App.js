import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const titleFieldString = event.target.value.toLocaleLowerCase();
    setTitle(titleFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>

      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder='set title'
        className='title-search-box'
      />
      <br />
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='Search Monsters'
        className='monsters-search-box'
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// Pure functions will allways produce the same result. It is
// completley isolated from what is given to it. So the function
// will only digest the two given parameters.
const pureFunc = (a, b) => {
  return a + b;
};

// Impure function will add a little twist to the result
// by referencing part of the code that is outside the
// given parameters. This parameters can vary.
let c = 3;

const impureFunc = (a, b) => {
  return a + b + caches;
};

// Side-effect function creates a side affect outside
// of it's scope. For example by taking the parameters
// and adjusting with them something outside of a funciton.
const funcB = (a, b) => {
  c = a + b;
  return a * b;
};

export default App;
