import { Component } from 'react';

import AppInfo from './app-info/app-info';
import SearchPanel from './search-panel/search-panel';
import AppFilter from './app-filter/app-filter';
import EmployeesList from './employees-list/employees-list';
import EmployeesAddForm from './employees-add-form/employees-add-form';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John', salary: 600, increase: true, like: false, id: 1 },
        { name: 'Mango', salary: 800, increase: false, like: true, id: 2 },
        { name: 'Ajax', salary: 600, increase: true, like: false, id: 3 },
        { name: 'Bill', salary: 900, increase: false, like: false, id: 4 },
        { name: 'Jim', salary: 700, increase: true, like: false, id: 5 },
      ],
      term: '',
      filter: 'all'
    };
    this.maxId = 6;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {

    const newItem =  {
      name,
      salary,
      increase: false,
      like: false,
      id: this.maxId++
    } 

    this.setState(({ data }) => {
      return {
        data: [...data, newItem]
      }
    })

    // this.maxId += 1;

  }
  
  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
           return {...item, increase: !item.increase}
        }
        return item;
       })
     }) )
  }

  onToggleLike = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
           return {...item, like: !item.like}
        }
        return item;
       })
     }) )
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    });
  }
 
  onUpdateSearch = (term) => {
    this.setState({ term });
  }
  
  filterPost = (items, filter) => {
    switch (filter) {
      case 'like':
        return items.filter(item => item.like);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  render() {
    const { data, term, filter } = this.state;
    const numerEmployees = data.length;
    const numerEmployeesIncrease = data.filter(elem => elem.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo numerEmployees={numerEmployees}
          numerEmployeesIncrease={numerEmployeesIncrease}
        />
        <div className='search-panel'>
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect } />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleLike={this.onToggleLike} />
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
};

export default App;
