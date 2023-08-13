import {Routes, Route, Link} from 'react-router-dom'
import HomePage from './pages/Home'
import News from './pages/News';
import Contact from './pages/Contact';
import logo from './logo.svg';
import UserDetail from './Users/UserDetail';


import './App.css';
import Hello from './components/Hello'
import Message from './components/Message';
import Profile from './components/Profile';
import React from 'react'
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Hello/>
      <Message></Message> */}
      {/* <Message height = "1m54"/> */}


      <nav>
        <ul>
          <li> 
            <Link to = "/">Home</Link>
          </li>
          <li> 
            <Link to = "/news">News</Link>
          </li>
          <li> 
            <Link to = "/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path = '/' element = { <HomePage/>} />
        <Route path = '/contact' element = { <Contact/>} />

        <Route path = '/news' element = { <News/>} />
        {/* how to use Url parameter */}
        <Route path="/user/:userId" element = {<UserDetail/>}/>
        


      </Routes>      



     

    </div>
  );
}

export default App;
