import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Contact from './Contact';
import Blogs from './Blogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route  element={<Home/>}></Route>
        <Route path="blogs" element={<Blogs/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
