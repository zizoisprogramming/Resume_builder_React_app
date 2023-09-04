import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Form from './pages/Form';
import Resumes from './components/Resumes/Resumes';
import About from "./pages/About/about";
import Cover from './pages/Cover';
import Covers from "./components/Covers/Covers"
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path = '/Resume' element ={<Form/>}/>
       <Route path = '/Resumes' element ={<Resumes/>}/>
       <Route path = '/about' element ={<About/>}/>
       <Route path = '/Cover' element ={<Cover/>}/>
       <Route path = '/Covers' element ={<Covers/>}/>
      </Routes>
    </Router>
  );
}

export default App;