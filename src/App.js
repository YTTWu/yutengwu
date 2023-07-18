import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contact'
import Project from './Components/Project'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Project" element={<Project />} />
        </Route>
        
      </Routes>
    </>
  )
}

export default App;
