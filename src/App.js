import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Message  from './components/Message';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
      {/* <Hello/>
      <Message></Message> */}
      <Profile name = "Hoai" lastname = "Thuong">
        <h1>is the most beautifull</h1>
      </Profile>

      
    </div>
  );
}

export default App;
