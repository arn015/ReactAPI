import './App.css';
import {Route,Routes,} from "react-router-dom";
import Login from './Login.js'
import Private from './Private.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/private" element={<Private />}/>
      </Routes>
    </div>
  );
}
export default App;