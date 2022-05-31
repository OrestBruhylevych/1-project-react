
import AppInfo from './app-info/app-info';
import SearchPanel from './search-panel/search-panel';
import AppFilter from './app-filter/app-filter';
import EmployeesList from './employees-list/employees-list';
import EmployeesAddForm from './employees-add-form/employees-add-form';

import './App.css';

const App = () => {
  const data = [
    { name: 'John', salary: 600, increase: true, id: 1 },
    { name: 'Mango', salary: 800, increase: false, id: 2 },
    { name: 'Ajax', salary: 600, increase: true, id: 3 },
    { name: 'Bill', salary: 900, increase: false, id: 4 },
    { name: 'Jim', salary: 700, increase: true, id: 5 },
  ];

  return (
      <div className="app">
        <AppInfo />
        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>
      <EmployeesList data={data}/>
        <EmployeesAddForm/>
      </div>
    );
};

export default App;
