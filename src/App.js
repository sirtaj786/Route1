
import './App.css';
import{Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Product from './components/Product';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    < Route path= "/" element={<Home/>}/>
    < Route path= "/about" element={<About/>}/>
    < Route path= "/product" element={<Product/>}/>
    < Route path= "/products*" element={<Products/>}>
      <Route path=":id" element={<Product/>}/>

    </Route>
 
    
    </Routes>
    </div>
  );
}

export default App;
