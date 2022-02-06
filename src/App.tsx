import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='body' >
        <a  href={"https://github.com/utkuKutkut/profile-page"}> Home </a>
        <h1>Profile Page </h1>
        </div>
        <div className='App' >
        <h1>Utku Can Kutkut </h1>
        <h4>github/utkuKutkut </h4>
        </div>
    
    </Router>
  );
}

export default App;