import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Receipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
          <Route path="/create" element={<Create/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/recipes/:id" element={<Receipe/>}/>
          <Route  exact path="/" element={<Home/>}/>
          </Routes>
         
        
      </BrowserRouter>
    </div>
  );
}

export default App;
