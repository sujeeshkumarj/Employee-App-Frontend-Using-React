// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import EmployeeForm from './Components/EmployeeForm';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path='/' exact element = {<Home/>}/>
        <Route path='/empform' exact element = {<EmployeeForm/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
