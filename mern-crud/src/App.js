import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import CreateTask from './components/CreateTask';
import CreateUser from './components/CreateUser';
import EditTask from './components/EditTask';
import TasksList from './components/TasksList';
import SideBar from './components/SideBar';

function App() {
  return (
    <BrowserRouter>
      <div className="row" style={{display:'flex'}}>
        <div className="col-2">
          <SideBar/>
        </div>
        <div className="col">
          <Route exact path="/" component={TasksList} />
          <Route path="/edit/:id" component={EditTask}/>
          <Route path="/create" component={CreateTask}/>
          <Route path="/user" component={CreateUser}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
