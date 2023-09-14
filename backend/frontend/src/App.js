import './App.scss';
import { ShowTodoList } from './components/showTodoList';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import { CreateTodo } from './components/createTodo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path = "/" Component={ShowTodoList} />
      <Route path ="/create-todo" Component={CreateTodo} />
      </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;
